import { prisma } from "../../../../lib/prisma";

export async function GET() {
  try {
    const now = new Date();
    const r = await prisma.license.updateMany({
      where: { expiresAt: { lte: now }, status: "ACTIVE" },
      data: { status: "EXPIRED" },
    });
    return Response.json({ ok: true, updated: r.count, at: now.toISOString() });
  } catch (e) {
    return Response.json({ ok: false, error: "Sunucu hatası" }, { status: 500 });
  }
}
