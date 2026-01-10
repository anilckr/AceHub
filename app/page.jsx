import Link from "next/link";
import Badge from "../components/Badge";

export default function HomePage() {
  return (
    <main className="gradient-bg">
      <section className="mx-auto max-w-6xl px-4 pb-14 pt-10 md:pb-20 md:pt-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            {/* LOGO + TEXT */}

            <Badge>
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>7/24 Destek • Hızlı Kurulum • Doğrulanmış Yorumlar</span>
            </Badge>

            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              Kalite tesadüf değildir.{" "}
              <span className="text-slate-200">AceHub</span> ile sunucunu güçlendir.
            </h1>

            <p className="text-base leading-relaxed text-slate-300 md:text-lg">
              Premium bot paketleri, otomasyon, güvenlik ve moderasyon çözümleri.
              Kurulum desteğiyle birlikte, hızlı ve stabil.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/urunler" className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">
                Ürünleri İncele
              </Link>
              <Link href="/referanslar" className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15">
                Müşteri Yorumları
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="card rounded-2xl p-4">
                <div className="text-xl font-bold">150+</div>
                <div className="mt-1 text-xs text-slate-300">Aktif Sunucu</div>
              </div>
              <div className="card rounded-2xl p-4">
                <div className="text-xl font-bold">4.9/5</div>
                <div className="mt-1 text-xs text-slate-300">Müşteri Puanı</div>
              </div>
              <div className="card rounded-2xl p-4">
                <div className="text-xl font-bold">7/24</div>
                <div className="mt-1 text-xs text-slate-300">Destek</div>
              </div>
            </div>
          </div>

          <div className="card rounded-3xl p-6 md:p-8">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-200">Öne Çıkan Paket</h2>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/20">
                  En Çok Tercih Edilen
                </span>
              </div>

              <div className="space-y-2">
                <div className="text-2xl font-bold">AceHub Premium</div>
                <p className="text-sm text-slate-300">Moderasyon + Ticket + Otomasyon + Kurulum Desteği</p>
              </div>

              <ul className="space-y-2 text-sm text-slate-200">
                <li className="flex gap-2"><span className="text-emerald-300">✓</span> Hızlı kurulum ve yapılandırma</li>
                <li className="flex gap-2"><span className="text-emerald-300">✓</span> Rol/kanal şablonları ve otomasyon</li>
                <li className="flex gap-2"><span className="text-emerald-300">✓</span> Log sistemi ve güvenlik ayarları</li>
                <li className="flex gap-2"><span className="text-emerald-300">✓</span> 7/24 destek</li>
              </ul>

              <div className="flex items-end justify-between">
                <div>
                  <div className="text-xs text-slate-400 line-through">₺999</div>
                  <div className="text-3xl font-bold">₺699</div>
                  <div className="text-xs text-slate-400">Tek seferlik</div>
                </div>
                <Link href="/urunler#premium" className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">
                  Şimdi Satın Al
                </Link>
              </div>

              <div className="rounded-2xl bg-white/5 p-4 text-xs text-slate-300 ring-1 ring-white/10">
                Not: Ödeme akışı/dijital teslimat entegrasyonu istersen (Shopier/iyzico vs.), eklenebilir.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card rounded-3xl p-6">
            <h3 className="text-base font-semibold">Hızlı Kurulum</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">Sunucu yapına göre kurulum şablonu ve ince ayarlarla hızlı teslim.</p>
          </div>
          <div className="card rounded-3xl p-6">
            <h3 className="text-base font-semibold">Stabil Altyapı</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">Optimize ayarlar, loglama, güvenlik ve performans odaklı yaklaşım.</p>
          </div>
          <div className="card rounded-3xl p-6">
            <h3 className="text-base font-semibold">Topluluk Odaklı</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">Geri bildirimlerle gelişen paketler ve aktif destek kanalları.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Doğrulanmış Müşteri Yorumları</h2>
            <p className="mt-2 text-sm text-slate-300">Gerçek kullanıcı geri bildirimleri (örnek veriler).</p>
          </div>
          <Link href="/referanslar" className="hidden rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/15 hover:bg-white/15 md:inline-flex">
            Tümünü Gör
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { name: "z4xanil", text: "Kurulum çok hızlıydı, ticket ve log sistemi tam istediğim gibi oldu.", server: "AceHub Community" },
            { name: "Mert", text: "Moderasyon ayarları stabil. Anti-raid ve log tarafı çok iyi.", server: "NightShift TR" },
            { name: "Esra", text: "Destek ekibi hızlı dönüş yaptı. Paket içeriği net ve kullanışlı.", server: "Aurora Hub" },
          ].map((r) => (
            <div key={r.name} className="card rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">{r.name}</div>
                <div className="text-xs text-emerald-300">Doğrulandı</div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{r.text}</p>
              <div className="mt-3 text-xs text-slate-400">Sunucu: {r.server}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Premium Bot Paketlerimiz</h2>
            <p className="mt-2 text-sm text-slate-300">3 paket, net özellikler ve hızlı satın alma akışı (örnek).</p>
          </div>
          <Link href="/urunler" className="hidden rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/15 hover:bg-white/15 md:inline-flex">
            Ürünler Sayfası
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="card rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold">Starter</h3>
              <span className="text-xs text-slate-300">Başlangıç</span>
            </div>
            <div className="mt-4">
              <div className="text-xs text-slate-400 line-through">₺399</div>
              <div className="text-3xl font-bold">₺249</div>
              <div className="text-xs text-slate-400">Tek seferlik</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> Temel moderasyon</li>
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> Hoş geldin / sayaç</li>
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> Kurulum rehberi</li>
            </ul>
            <Link href="/urunler#starter" className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold ring-1 ring-white/15 hover:bg-white/15">
              Şimdi Satın Al
            </Link>
          </div>

          <div className="card rounded-3xl p-6 ring-1 ring-emerald-400/25">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold">Premium</h3>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/20">
                Önerilen
              </span>
            </div>
            <div className="mt-4">
              <div className="text-xs text-slate-400 line-through">₺999</div>
              <div className="text-3xl font-bold">₺699</div>
              <div className="text-xs text-slate-400">Tek seferlik</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> Gelişmiş moderasyon</li>
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> Ticket sistemi</li>
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> Log / güvenlik</li>
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> Kurulum desteği</li>
            </ul>
            <Link href="/urunler#premium" className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">
              Şimdi Satın Al
            </Link>
          </div>

          <div className="card rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold">Ultimate</h3>
              <span className="text-xs text-slate-300">Kurumsal</span>
            </div>
            <div className="mt-4">
              <div className="text-xs text-slate-400 line-through">₺1.799</div>
              <div className="text-3xl font-bold">₺1.199</div>
              <div className="text-xs text-slate-400">Tek seferlik</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> Anti-raid paketleri</li>
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> Özel komutlar</li>
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> Özel kurulum & danışmanlık</li>
            </ul>
            <Link href="/urunler#ultimate" className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold ring-1 ring-white/15 hover:bg-white/15">
              Şimdi Satın Al
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="card rounded-3xl p-6 md:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Sık Sorulan Sorular</h2>
              <p className="mt-2 text-sm text-slate-300">En çok gelen soruların kısa cevapları.</p>
            </div>
            <Link href="/sss" className="hidden rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/15 hover:bg-white/15 md:inline-flex">
              Tam S.S.S.
            </Link>
          </div>

          <div className="mt-6 grid gap-3">
            {[
              { q: "Kurulum ne kadar sürer?", a: "Genelde 30-120 dakika arası; sunucu yapısına göre değişir." },
              { q: "Güncelleme ve destek var mı?", a: "Paket içeriğine göre bakım/güncelleme ve 7/24 destek sağlanır." },
              { q: "Ödeme nasıl yapılır?", a: "Şu an örnek butonlar var; istersen Shopier/iyzico entegrasyonu eklenir." },
            ].map((it) => (
              <details key={it.q} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <summary className="cursor-pointer text-sm font-semibold text-slate-200">{it.q}</summary>
                <p className="mt-2 text-sm text-slate-300">{it.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
