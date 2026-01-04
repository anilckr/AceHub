import Iyzipay from "iyzipay";
import { prisma } from "../../../../../lib/prisma";
import { getBaseUrl } from "../../../../../lib/url";

function getClient() {
  const apiKey = process.env.IYZICO_API_KEY;
  const secretKey = process.env.IYZICO_SECRET_KEY;
  const uri = process.env.IYZICO_BASE_URL || "https://sandbox-api.iyzipay.com";
  if (!apiKey || !secretKey) return null;
  return new Iyzipay({ apiKey, secretKey, uri });
}

export async function POST(req) {
  try {
    const client = getClient();
    if (!client) return Response.json({ error: "iyzico env ayarlanmadı" }, { status: 400 });

    const { durationDays, amountTRY } = await req.json();
    const days = Number(durationDays);
    const amount = Number(amountTRY);

    if (!Number.isFinite(days) || days < 1) return Response.json({ error: "durationDays geçersiz" }, { status: 400 });
    if (!Number.isFinite(amount) || amount < 1) return Response.json({ error: "amountTRY geçersiz" }, { status: 400 });

    const order = await prisma.order.create({
      data: {
        provider: "IYZICO",
        amountTRY: Math.round(amount),
        status: "PENDING",
        rawInit: { durationDays: days },
      },
    });

    const baseUrl = getBaseUrl();
    const callbackUrl = `${baseUrl}/api/pay/iyzico/callback?orderId=${order.id}`;

    const request = {
      locale: "tr",
      conversationId: order.id,
      price: (amount / 100).toFixed(2), // NOTE: if you store kuruş, adjust. Here amount is TRY.
      paidPrice: (amount / 100).toFixed(2),
      currency: "TRY",
      basketId: order.id,
      paymentGroup: "PRODUCT",
      callbackUrl,
      enabledInstallments: [1],
      buyer: {
        id: "BY789",
        name: "AceHub",
        surname: "Customer",
        gsmNumber: "+905555555555",
        email: "customer@acehub.local",
        identityNumber: "11111111111",
        registrationAddress: "Istanbul",
        ip: "85.34.78.112",
        city: "Istanbul",
        country: "Turkey",
      },
      shippingAddress: {
        contactName: "AceHub Customer",
        city: "Istanbul",
        country: "Turkey",
        address: "Istanbul",
      },
      billingAddress: {
        contactName: "AceHub Customer",
        city: "Istanbul",
        country: "Turkey",
        address: "Istanbul",
      },
      basketItems: [
        {
          id: `LIC-${days}`,
          name: `AceHub Lisans (${days} gün)`,
          category1: "License",
          itemType: "VIRTUAL",
          price: (amount / 100).toFixed(2),
        },
      ],
    };

    const initRes = await new Promise((resolve, reject) => {
      client.checkoutFormInitialize.create(request, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });

    if (initRes?.status !== "success") {
      await prisma.order.update({
        where: { id: order.id },
        data: { status: "FAILED", rawInit: initRes },
      });
      return Response.json({ error: initRes?.errorMessage || "iyzico init başarısız", detail: initRes }, { status: 400 });
    }

    await prisma.order.update({
      where: { id: order.id },
      data: { providerRef: initRes.token, rawInit: initRes },
    });

    return Response.json({ orderId: order.id });
  } catch (e) {
    return Response.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
