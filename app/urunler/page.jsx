"use client";
const PAYMENTS_ENABLED = false;
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PRODUCTS, formatTRY } from "../../lib/products";

export default function UrunlerPage() {
  const router = useRouter();

  return (
    <main className="gradient-bg">
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Ürünler</h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            İhtiyacına uygun paketi seç, ödeme yap ve hizmet sürecini hemen başlatalım.
            Süreye göre fiyatlar otomatik güncellenir.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {PRODUCTS.map((p) => {
            const [selectedOption, setSelectedOption] = useState(
              p.pricingOptions ? p.pricingOptions[0] : null
            );

            return (
              <article
                key={p.sku}
                id={p.sku}
                className={`card rounded-3xl p-6 ${
                  p.featured ? "ring-1 ring-emerald-400/25" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">{p.name}</h2>
                  {p.featured ? (
                    <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/20">
                      Önerilen
                    </span>
                  ) : null}
                </div>

                <p className="mt-2 text-sm text-slate-300">{p.description}</p>

                {/* Fiyat / Süre */}
                <div className="mt-4">
                  {p.pricingOptions ? (
                    <>
                      <div className="text-xs text-slate-400">
                        {selectedOption.label}
                      </div>
                      <div className="text-3xl font-bold">
                        {formatTRY(selectedOption.priceKurus)}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-xs text-slate-400">
                        {typeof p.durationDays === "number"
                          ? `${p.durationDays} gün`
                          : p.durationDays}
                      </div>
                      <div className="text-3xl font-bold">
                        {formatTRY(p.priceKurus)}
                      </div>
                    </>
                  )}
                </div>

                {/* Süre Seçimi (varsa) */}
                {p.pricingOptions && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.pricingOptions.map((opt) => (
                      <button
                        key={opt.label}
                        onClick={() => setSelectedOption(opt)}
                        className={`rounded-xl px-3 py-1 text-xs font-semibold ring-1
                          ${
                            selectedOption.label === opt.label
                              ? "bg-emerald-500/20 text-emerald-300 ring-emerald-400/40"
                              : "bg-white/5 text-slate-300 ring-white/10 hover:bg-white/10"
                          }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* Özellikler */}
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-emerald-300">✓</span> {f}
                    </li>
                  ))}
                </ul>

                {/* Satın Al */}
{PAYMENTS_ENABLED && (
  <button
    className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
    onClick={() =>
      router.push(
        `/odeme?sku=${encodeURIComponent(p.sku)}${
          selectedOption ? `&days=${selectedOption.durationDays}` : ""
        }`
      )
    }
  >
    Satın Al
  </button>
)}

              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
