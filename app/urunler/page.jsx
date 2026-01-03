"use client";

export default function UrunlerPage() {
  function buy(pkg) {
    alert(`Demo: '${pkg}' satın alma akışı. İstersen gerçek ödeme entegrasyonu eklenir.`);
  }

  return (
    <main className="gradient-bg">
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Ürünler</h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            Paketler, özellikler ve satın alma butonları. Ödeme/teslimat entegrasyonu istersen bu sayfaya bağlarız.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article id="starter" className="card rounded-3xl p-6">
            <h2 className="text-lg font-semibold">Starter</h2>
            <p className="mt-2 text-sm text-slate-300">Küçük topluluklar için temel kurulum.</p>
            <div className="mt-4">
              <div className="text-xs text-slate-400 line-through">₺399</div>
              <div className="text-3xl font-bold">₺249</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> Temel moderasyon</li>
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> Hoş geldin / sayaç</li>
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> Basit loglama</li>
            </ul>
            <button
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              onClick={() => buy("starter")}
            >
              Satın Al (Demo)
            </button>
          </article>

          <article id="premium" className="card rounded-3xl p-6 ring-1 ring-emerald-400/25">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Premium</h2>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/20">
                Önerilen
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-300">En çok tercih edilen paket.</p>
            <div className="mt-4">
              <div className="text-xs text-slate-400 line-through">₺999</div>
              <div className="text-3xl font-bold">₺699</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> Gelişmiş moderasyon</li>
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> Ticket sistemi</li>
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> Log / güvenlik</li>
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> Kurulum desteği</li>
            </ul>
            <button
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              onClick={() => buy("premium")}
            >
              Satın Al (Demo)
            </button>
          </article>

          <article id="ultimate" className="card rounded-3xl p-6">
            <h2 className="text-lg font-semibold">Ultimate</h2>
            <p className="mt-2 text-sm text-slate-300">Yüksek trafikli sunucular için özel çözümler.</p>
            <div className="mt-4">
              <div className="text-xs text-slate-400 line-through">₺1.799</div>
              <div className="text-3xl font-bold">₺1.199</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> Anti-raid paketleri</li>
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> Özel komutlar</li>
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> Özel kurulum & danışmanlık</li>
            </ul>
            <button
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              onClick={() => buy("ultimate")}
            >
              Satın Al (Demo)
            </button>
          </article>
        </div>

        <section className="mt-10 card rounded-3xl p-6 md:p-8">
          <h3 className="text-lg font-semibold">Ödeme / Teslimat Entegrasyonu</h3>
          <p className="mt-2 text-sm text-slate-300">
            Şu an “Satın Al” butonları demo. İstersen Shopier, iyzico, PayTR gibi yöntemleri ekleyip otomatik teslimat akışı kurabiliriz.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="text-sm font-semibold">1) Ödeme</div>
              <div className="mt-1 text-xs text-slate-300">Kart / Havale / Link ile ödeme.</div>
            </div>
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="text-sm font-semibold">2) Teslimat</div>
              <div className="mt-1 text-xs text-slate-300">Otomatik anahtar / panel erişimi / dosya.</div>
            </div>
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="text-sm font-semibold">3) Destek</div>
              <div className="mt-1 text-xs text-slate-300">Discord ticket üzerinden takip.</div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
