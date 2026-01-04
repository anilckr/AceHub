"use client";

import { useState } from "react";
import Link from "next/link";

export default function PayPage() {
  const [days, setDays] = useState(30);
  const [amount, setAmount] = useState(499); // TRY
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  async function startIyzico() {
    setLoading(true);
    setErr("");
    const res = await fetch("/api/pay/iyzico/init", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ durationDays: Number(days), amountTRY: Number(amount) }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) return setErr(data?.error || "Hata");
    window.location.href = `/odeme/iyzico/${data.orderId}`;
  }

  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-bold">Ödeme</h1>
      <p className="mt-2 text-neutral-300">Ödeme sonrası lisans kodu otomatik oluşturulur.</p>

      <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/20 p-6 grid gap-3">
        <div className="grid grid-cols-2 gap-2">
          <label className="text-sm text-neutral-400">Süre (gün)</label>
          <input
            className="rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2"
            type="number"
            min="1"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
          <label className="text-sm text-neutral-400">Tutar (TRY)</label>
          <input
            className="rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2"
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button
          onClick={startIyzico}
          disabled={loading}
          className="rounded-lg bg-neutral-100 text-neutral-900 px-4 py-2 font-medium disabled:opacity-60"
        >
          {loading ? "Başlatılıyor..." : "iyzico ile Öde"}
        </button>

        <div className="text-xs text-neutral-500">
          Not: Shopier entegrasyonu scaffold edildi; prod için Shopier modül ayarları + secret gerektirir.
        </div>

        {err ? <div className="text-sm text-red-400">{err}</div> : null}
      </div>

      <div className="mt-4 text-sm text-neutral-400">
        Admin panelden manuel lisans oluşturmak için <Link className="underline" href="/admin/lisanslar">Lisanslar</Link>.
      </div>
    </div>
  );
}
