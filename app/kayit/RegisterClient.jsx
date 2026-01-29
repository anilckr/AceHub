"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

export default function RegisterClient() {
  const router = useRouter();
  const sp = useSearchParams();
  const next = sp.get("next") || sp.get("callbackUrl") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [globalErr, setGlobalErr] = useState("");

  function validate() {
    let ok = true;
    setEmailErr("");
    setPasswordErr("");
    setGlobalErr("");

    const e = email.trim();

    if (!e) {
      setEmailErr("Email boş olamaz.");
      ok = false;
    } else if (!isValidEmail(e)) {
      setEmailErr("Geçerli bir email gir (ör: ad@site.com).");
      ok = false;
    }

    if (!password) {
      setPasswordErr("Şifre boş olamaz.");
      ok = false;
    } else if (password.length < 6) {
      setPasswordErr("Şifre en az 6 karakter olmalı.");
      ok = false;
    }

    return ok;
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setGlobalErr("");

    const r = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim(), password }),
    });

    const data = await r.json().catch(() => ({}));

    if (!r.ok) {
      setLoading(false);
      setGlobalErr(data?.error || "Kayıt sırasında hata oluştu.");
      return;
    }

    // Kayıt başarılı → otomatik giriş
    const res = await signIn("credentials", {
      redirect: false,
      email: email.trim(),
      password,
    });

    setLoading(false);

    if (res?.error) {
      setGlobalErr("Kayıt oldu ama giriş yapılamadı. Lütfen giriş sayfasından dene.");
      router.push("/login");
      return;
    }

    router.push(next);
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-20">
      <div className="max-w-md">
        <h1 className="text-3xl font-bold">Kayıt</h1>
        <p className="mt-2 text-slate-300">Hızlıca hesap oluştur ve devam et.</p>

        <form
          onSubmit={onSubmit}
          className="mt-6 grid gap-3 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
        >
          <div className="grid gap-1">
            <input
              className={`rounded-lg border bg-slate-950 px-3 py-2 outline-none ${
                emailErr ? "border-red-400/60" : "border-white/15 focus:border-white/30"
              }`}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              inputMode="email"
            />
            {emailErr ? <div className="text-sm text-red-300">{emailErr}</div> : null}
          </div>

          <div className="grid gap-1">
            <div className="relative">
              <input
                className={`w-full rounded-lg border bg-slate-950 px-3 py-2 pr-12 outline-none ${
                  passwordErr ? "border-red-400/60" : "border-white/15 focus:border-white/30"
                }`}
                placeholder="Şifre (min 6)"
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />

              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-xs text-slate-200 hover:bg-white/10"
              >
                {showPw ? "Gizle" : "Göster"}
              </button>
            </div>

            {passwordErr ? <div className="text-sm text-red-300">{passwordErr}</div> : null}
          </div>

          <button
            disabled={loading}
            className="mt-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100 disabled:opacity-60"
          >
            {loading ? "Hesap oluşturuluyor..." : "Hesap Oluştur"}
          </button>

          {globalErr ? (
            <div className="rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-300">
              {globalErr}
            </div>
          ) : null}

          <div className="text-sm text-slate-300">
            Zaten hesabın var mı?{" "}
            <Link className="underline" href="/login">
              Giriş yap
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
