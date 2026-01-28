export const dynamic = "force-dynamic";
export const runtime = "nodejs";
import { prisma } from "../../../../../lib/prisma";
import { generateLicenseCode } from "../../../../../lib/license";
import { requireAdmin } from "../../../../../lib/authz";

export async function POST(req) {
  try {
    const session = await requireAdmin();
    if (!session) return Response.json({ error: "Yetkisiz" }, { status: 401 });

    const body = await req.json();
    const durationDays = Number(body?.durationDays || 0);
    if (!Number.isFinite(durationDays) || durationDays < 1) {
      return Response.json({ error: "durationDays geçersiz" }, { status: 400 });
    }

    let userId = null;
    if (body?.email) {
      const user = await prisma.user.findUnique({ where: { email: String(body.email).toLowerCase() } });
      if (!user) return Response.json({ error: "Kullanıcı bulunamadı (email)" }, { status: 404 });
      userId = user.id;
    }

    let code = null;
    for (let i = 0; i < 5; i++) {
      const c = generateLicenseCode();
      const exists = await prisma.license.findUnique({ where: { code: c } });
      if (!exists) { code = c; break; }
    }
    if (!code) return Response.json({ error: "Kod üretilemedi, tekrar dene" }, { status: 500 });

    const startsAt = new Date();
    const expiresAt = new Date(Date.now() + durationDays * 24 * 60 * 60 * 1000);

    const lic = await prisma.license.create({
      data: { code, userId, durationDays, startsAt, expiresAt, note: body?.note || null },
    });

    return Response.json({ id: lic.id, code: lic.code, expiresAt: lic.expiresAt.toISOString() });
  } catch (e) {
    return Response.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
