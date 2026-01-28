import { prisma } from "../../../../../lib/prisma";

/**
 * Shopier tarafı modül/OSB ayarları ve imza formatı gerektirdiği için burada sadece scaffold var.
 * Üretimde: Shopier panelindeki entegrasyon yönergelerine göre parametre + imza üretip yönlendirme yapmalısın.
 */
export async function POST(req) {
  try {
    const apiKey = process.env.SHOPIER_API_KEY;
    const apiSecret = process.env.SHOPIER_API_SECRET;
    const storeId = process.env.SHOPIER_STORE_ID;

    if (!apiKey || !apiSecret || !storeId) {
      return Response.json({ error: "Shopier env ayarlanmadı" }, { status: 400 });
    }

    const { durationDays, amountKurus } = await req.json();
    const order = await prisma.order.create({
      data: {
        provider: "SHOPIER",
        amountKurus: Math.round(Number(amountKurus || 0)),
        durationDays: Number(durationDays || 0),
        status: "PENDING",
        rawInit: { durationDays },
      },
    });

    // TODO: Create Shopier payment URL and redirect
    return Response.json({ error: "Shopier entegrasyonu burada scaffold. İmza + yönlendirme eklenecek.", orderId: order.id }, { status: 501 });
  } catch (e) {
    return Response.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
