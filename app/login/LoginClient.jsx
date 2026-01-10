"use client";

import { useSearchParams } from "next/navigation";

export default function LoginClient() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  // Buraya senin mevcut login UI’ını koyabilirsin.
  // Şimdilik örnek bir ekran:
  return (
    <main className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="text-3xl font-bold">Giriş</h1>
      <p className="mt-2 text-slate-300">
        Giriş yaptıktan sonra yönlendirme: <span className="text-white">{callbackUrl}</span>
      </p>

      {/* TODO: Login formun burada */}
      <div className="mt-6 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
        <p className="text-sm text-slate-300">Login formunu buraya yerleştir.</p>
      </div>
    </main>
  );
}
