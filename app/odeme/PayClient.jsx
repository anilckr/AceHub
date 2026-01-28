"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getProduct, formatTRY } from "../../lib/products";

export default function PayClient() {
  const sp = useSearchParams();
  const sku = sp.get("sku") || "premium";
  const product = useMemo(() => getProduct(sku) || getProduct("premium"), [sku]);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  async function startIyzico() {
    setLoading(true);
    setErr("");

    const res = await fetch("/api/pay/iyzico/init", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        durationDays: product.durationDays,
        amountKurus: product.priceKurus,
        buyer: {
          name: name || "AceHub",
          surname: surname || "Customer",
          email: email || "customer@acehub.local",
          gsmNumber: phone || "+905555555555",
        },
      }),
    });

    const data = await res.json();
    setLoading(false);
    if (!res.ok) return setErr(data?.error || "Hata");
    window.location.href = `/odeme/iyzico/${data.orderId}`;
  }

  return (
    <div className="max-w-2xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Ödeme</h1>
          <p className="mt-2 text-neutral-300">Ödeme sonrası lisans kodu otomatik oluşturulur ve anında teslim edilir.</p>
        </div>
        <Link className="text-sm text-neutral-300 underline" href="/urunler">
          Ürünlere dön
        </Link>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-5">
        <div className="md:col-span-2 rounded-2xl border border-neutral-800 bg-neutral-900/20 p-6">
          <div className="text-xs text-neutral-400">Seçilen Paket</div>
          <div className="mt-1 text-lg font-semibold">{product.name}</div>
          <div className="mt-2 text-sm text-neutral-300">{product.description}</div>

          <div className="mt-4 rounded-xl bg-black/30 p-4 ring-1 ring-white/10">
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-400">Süre</span>
              <span className="font-medium">{product.durationDays} gün</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-neutral-400">Tutar</span>
              <span className="text-2xl font-bold">{formatTRY(product.priceKurus)}</span>
            </div>
          </div>

          <ul className="mt-4 space-y-2 text-sm text-neutral-300">
            {product.features.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="text-emerald-300">✓</span> {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3 rounded-2xl border border-neutral-800 bg-neutral-900/20 p-6">
          <div className="font-semibold">Alıcı Bilgileri</div>
          <p className="mt-1 text-sm text-neutral-400">Bu bilgiler iyzico formunda görünür. Boş bırakabilirsin (test/demoda).</p>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <input className="rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2" placeholder="Ad" value={name} onChange={(e) => setName(e.target.value)} />
            <input className="rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2" placeholder="Soyad" value={surname} onChange={(e) => setSurname(e.target.value)} />
            <input className="rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 md:col-span-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 md:col-span-2" placeholder="Telefon (+90...)" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>

          <button
            onClick={startIyzico}
            disabled={loading}
            className="mt-5 w-full rounded-lg bg-neutral-100 text-neutral-900 px-4 py-3 font-semibold disabled:opacity-60"
          >
            {loading ? "Başlatılıyor..." : "iyzico ile Öde"}
          </button>

          {err ? <div className="mt-3 text-sm text-red-400">{err}</div> : null}

          <div className="mt-4 text-xs text-neutral-500">
            Ödeme test etmek için sandbox anahtarlarını <span className="font-mono">.env</span> içine girmen gerekir.
          </div>
        </div>
      </div>
    </div>
  );
}
