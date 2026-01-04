"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const sp = useSearchParams();
  const callbackUrl = sp.get("callbackUrl") || "/admin";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl,
    });
    // If redirect=false, we'd handle result. With redirect=true, errors show via query param.
    if (res?.error) setErr("Giriş başarısız");
  }

  return (
    <div className="max-w-md">
      <h1 className="text-3xl font-bold">Giriş</h1>
      <p className="mt-2 text-neutral-300">Admin paneline erişmek için giriş yap.</p>

      <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 outline-none focus:border-neutral-400"
          placeholder="Email"
          type="email"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 outline-none focus:border-neutral-400"
          placeholder="Şifre"
          type="password"
          required
        />
        <button className="rounded-lg bg-neutral-100 text-neutral-900 px-4 py-2 font-medium">
          Giriş yap
        </button>
        {err ? <div className="text-sm text-red-400">{err}</div> : null}
      </form>

      <div className="mt-6 text-sm text-neutral-400">
        İlk admin kullanıcı <code className="text-neutral-200">npm run seed</code> ile oluşturulur.
      </div>
    </div>
  );
}
