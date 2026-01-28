"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LoginClient() {
  const sp = useSearchParams();
  const next = sp.get("next") || sp.get("callbackUrl") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErr("");
    const res = await signIn("credentials", {
      redirect: true,
      callbackUrl: next,
      email,
      password,
    });
    // signIn redirects on success; on failure it returns an error string in URL
    setLoading(false);
    if (res?.error) setErr("Email veya şifre hatalı.");
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-20">
      <div className="max-w-md">
        <h1 className="text-3xl font-bold">Giriş</h1>
        <p className="mt-2 text-slate-300">Hesabına giriş yap ve paneline eriş.</p>

        <form onSubmit={onSubmit} className="mt-6 grid gap-3 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
          <input
            className="rounded-lg border border-white/15 bg-slate-950 px-3 py-2 outline-none focus:border-white/30"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="rounded-lg border border-white/15 bg-slate-950 px-3 py-2 outline-none focus:border-white/30"
            placeholder="Şifre"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            disabled={loading}
            className="mt-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100 disabled:opacity-60"
          >
            {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>

          {err ? <div className="text-sm text-red-300">{err}</div> : null}

          <div className="text-sm text-slate-300">
            Hesabın yok mu? <Link className="underline" href="/kayit">Kayıt ol</Link>
          </div>
        </form>
      </div>
    </main>
  );
}
