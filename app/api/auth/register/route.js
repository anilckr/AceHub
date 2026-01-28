import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "../../../../lib/prisma";

export async function POST(req) {
  try {
    const schema = z.object({
      email: z.string().email(),
      password: z.string().min(6).max(128),
    });

    const body = await req.json();
    const { email, password } = schema.parse(body);
    const e = email.toLowerCase().trim();

    const exists = await prisma.user.findUnique({ where: { email: e } });
    if (exists) return Response.json({ error: "Bu email zaten kayıtlı" }, { status: 409 });

    const passwordHash = await bcrypt.hash(password, 10);
    await prisma.user.create({ data: { email: e, passwordHash, role: "USER" } });

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ error: "Kayıt başarısız" }, { status: 400 });
  }
}
