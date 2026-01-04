import { prisma } from "../../../../../lib/prisma";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get("orderId");
    if (!orderId) return Response.json({ error: "orderId gerekli" }, { status: 400 });

    const order = await prisma.order.findUnique({ where: { id: orderId } });
    if (!order) return Response.json({ error: "Sipariş bulunamadı" }, { status: 404 });

    const content = order?.rawInit?.checkoutFormContent;
    if (!content) return Response.json({ error: "Ödeme formu bulunamadı" }, { status: 400 });

    return Response.json({ checkoutFormContent: content });
  } catch (e) {
    return Response.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
