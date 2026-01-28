"use client";

import { useRouter } from "next/navigation";
import { PRODUCTS, formatTRY } from "../../lib/products";

export default function UrunlerPage() {
  const router = useRouter();

  return (
    <main className="gradient-bg">
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Ürünler</h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            Paketi seç, ödeme yap, lisans kodunu anında teslim al. Satın alma sonrası kodu ayrıca <span className="font-mono">/sure-sorgulama</span>
            sayfasından da doğrulayabilirsin.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {PRODUCTS.map((p) => (
            <article
              key={p.sku}
              id={p.sku}
              className={`card rounded-3xl p-6 ${p.featured ? "ring-1 ring-emerald-400/25" : ""}`}
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

              <div className="mt-4">
                <div className="text-xs text-slate-400">{p.durationDays} gün</div>
                <div className="text-3xl font-bold">{formatTRY(p.priceKurus)}</div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-emerald-300">✓</span> {f}
                  </li>
                ))}
              </ul>

              <button
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                onClick={() => router.push(`/odeme?sku=${encodeURIComponent(p.sku)}`)}
              >
                Satın Al
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
