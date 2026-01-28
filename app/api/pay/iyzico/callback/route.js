import Iyzipay from "iyzipay";
import { prisma } from "../../../../../lib/prisma";
import { generateLicenseCode } from "../../../../../lib/license";
import { getBaseUrl } from "../../../../../lib/url";

function getClient() {
  const apiKey = process.env.IYZICO_API_KEY;
  const secretKey = process.env.IYZICO_SECRET_KEY;
  const uri = process.env.IYZICO_BASE_URL || "https://sandbox-api.iyzipay.com";
  if (!apiKey || !secretKey) return null;
  return new Iyzipay({ apiKey, secretKey, uri });
}

export async function POST(req) {
  const baseUrl = getBaseUrl();
  try {
    const client = getClient();
    if (!client) return Response.redirect(`${baseUrl}/odeme/basarisiz`, 302);

    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get("orderId");
    if (!orderId) return Response.redirect(`${baseUrl}/odeme/basarisiz`, 302);

    const form = await req.formData();
    const token = form.get("token");

    const order = await prisma.order.findUnique({ where: { id: orderId } });
    if (!order || !token) return Response.redirect(`${baseUrl}/odeme/basarisiz`, 302);

    // Idempotency: already paid -> redirect with existing license
    if (order.status === "PAID" && order.licenseId) {
      const lic = await prisma.license.findUnique({ where: { id: order.licenseId } });
      if (lic) return Response.redirect(`${baseUrl}/odeme/basarili?code=${encodeURIComponent(lic.code)}`, 302);
    }

    const retrieveReq = { locale: "tr", conversationId: orderId, token: String(token) };

    const result = await new Promise((resolve, reject) => {
      client.checkoutForm.retrieve(retrieveReq, (err, res) => {
        if (err) return reject(err);
        resolve(res);
      });
    });

    if (result?.paymentStatus !== "SUCCESS" || result?.status !== "success") {
      await prisma.order.update({
        where: { id: orderId },
        data: { status: "FAILED", rawResult: result },
      });
      return Response.redirect(`${baseUrl}/odeme/basarisiz`, 302);
    }

    const days = Number(order.durationDays || 30);
    const startsAt = new Date();
    const expiresAt = new Date(Date.now() + days * 24 * 60 * 60 * 1000);

    // unique license code retries
    let code = null;
    for (let i = 0; i < 5; i++) {
      const c = generateLicenseCode();
      const exists = await prisma.license.findUnique({ where: { code: c } });
      if (!exists) { code = c; break; }
    }
    if (!code) return Response.redirect(`${baseUrl}/odeme/basarisiz`, 302);

    const license = await prisma.license.create({
      data: {
        code,
        durationDays: days,
        startsAt,
        expiresAt,
      },
    });

    await prisma.order.update({
      where: { id: orderId },
      data: { status: "PAID", rawResult: result, licenseId: license.id, providerRef: String(token) },
    });

    return Response.redirect(`${baseUrl}/odeme/basarili?code=${encodeURIComponent(code)}`, 302);
  } catch (e) {
    return Response.redirect(`${baseUrl}/odeme/basarisiz`, 302);
  }
}
