import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const e = String(email || "").trim().toLowerCase();
    const p = String(password || "");

    if (!e) return NextResponse.json({ error: "Email boş olamaz." }, { status: 400 });
    if (!isValidEmail(e))
      return NextResponse.json({ error: "Geçerli bir email gir." }, { status: 400 });

    if (!p) return NextResponse.json({ error: "Şifre boş olamaz." }, { status: 400 });
    if (p.length < 6)
      return NextResponse.json({ error: "Şifre en az 6 karakter olmalı." }, { status: 400 });

    const exists = await prisma.user.findUnique({ where: { email: e } });
    if (exists) return NextResponse.json({ error: "Bu email zaten kayıtlı." }, { status: 409 });

    const passwordHash = await bcrypt.hash(p, 10);

    await prisma.user.create({
      data: { email: e, passwordHash, role: "USER" },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}
