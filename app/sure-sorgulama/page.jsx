"use client";

import { useState } from "react";

export default function Page() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);
  const [err, setErr] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    setResult(null);
    const res = await fetch("/api/licenses/lookup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });
    const data = await res.json();
    if (!res.ok) {
      setErr(data?.error || "Hata");
      return;
    }
    setResult(data);
  }

  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-bold">Süre Sorgulama</h1>
      <p className="mt-2 text-neutral-300">Lisans kodunu gir, kalan süreyi öğren.</p>

      <form onSubmit={onSubmit} className="mt-6 flex gap-2">
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 outline-none focus:border-neutral-400"
          placeholder="ACEHUB-XXXX-XXXX-XXXX"
        />
        <button className="rounded-lg bg-neutral-100 text-neutral-900 px-4 py-2 font-medium">
          Sorgula
        </button>
      </form>

      {err ? <div className="mt-4 text-sm text-red-400">{err}</div> : null}

      {result ? (
        <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/20 p-6">
          <div className="font-semibold">Durum: {result.status}</div>
          <div className="mt-2 text-sm text-neutral-300">Bitiş: {result.expiresAt}</div>
          <div className="mt-1 text-sm text-neutral-300">Kalan gün: {result.remainingDays}</div>
        </div>
      ) : null}
    </div>
  );
}
