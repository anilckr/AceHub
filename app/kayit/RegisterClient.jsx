"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function RegisterClient() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [ok, setOk] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErr("");
    setOk(false);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setErr(data?.error || "Kayıt başarısız");
      return;
    }
    setOk(true);
    // auto sign-in
    await signIn("credentials", { email, password, callbackUrl: "/panel" });
  }

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/20 p-6">
      <form onSubmit={onSubmit} className="grid gap-3">
        <input
          className="rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <input
          className="rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2"
          placeholder="Şifre (min 6)"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
        />

        <button
          disabled={loading}
          className="mt-1 rounded-lg bg-neutral-100 text-neutral-900 px-4 py-2 font-semibold disabled:opacity-60"
        >
          {loading ? "Oluşturuluyor..." : "Hesap Oluştur"}
        </button>
      </form>

      {err ? <div className="mt-3 text-sm text-red-400">{err}</div> : null}
      {ok ? <div className="mt-3 text-sm text-green-400">Kayıt başarılı. Giriş yapılıyor...</div> : null}

      <div className="mt-4 text-sm text-neutral-400">
        Zaten hesabın var mı? <Link className="underline" href="/login">Giriş yap</Link>
      </div>
    </div>
  );
}
