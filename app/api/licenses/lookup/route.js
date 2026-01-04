import { prisma } from "../../../../lib/prisma";
import { remainingDays } from "../../../../lib/license";

export async function POST(req) {
  try {
    const { code } = await req.json();
    if (!code || typeof code !== "string") {
      return Response.json({ error: "Kod gerekli" }, { status: 400 });
    }

    const lic = await prisma.license.findUnique({ where: { code: code.trim().toUpperCase() } });
    if (!lic) return Response.json({ error: "Lisans bulunamadı" }, { status: 404 });

    const rem = remainingDays(lic.expiresAt);
    const status = rem <= 0 ? "EXPIRED" : lic.status;

    return Response.json({
      code: lic.code,
      status,
      expiresAt: new Date(lic.expiresAt).toISOString(),
      remainingDays: rem,
    });
  } catch (e) {
    return Response.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
