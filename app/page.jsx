import Link from "next/link";
import Badge from "../components/Badge";

export default function HomePage() {
  return (
    <main className="gradient-bg">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pb-14 pt-10 md:pb-20 md:pt-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          
          {/* SOL TARAF */}
          <div className="space-y-6">
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
              <Link
                href="/urunler"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                Ürünleri İncele
              </Link>
              <Link
                href="/referanslar"
                className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
              >
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

          {/* SAĞ TARAF – HİZMETLER */}
          <div className="card rounded-3xl p-6 md:p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-200">
                  Hizmet Alanlarımız
                </h2>
                <span className="text-xs text-emerald-300">
                  Profesyonel Çözümler
                </span>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <h3 className="text-sm font-semibold">Discord Bot Sistemleri</h3>
                  <p className="mt-1 text-xs text-slate-300">
                    Moderasyon, ticket, güvenlik ve otomasyon çözümleri.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <h3 className="text-sm font-semibold">Özel Web Site Tasarımı</h3>
                  <p className="mt-1 text-xs text-slate-300">
                    Kişisel, marka ve özel amaçlı modern web siteleri.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <h3 className="text-sm font-semibold">FiveM Script & Sistemler</h3>
                  <p className="mt-1 text-xs text-slate-300">
                    RP sunucuları için performanslı özel sistemler.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <h3 className="text-sm font-semibold">Sunucu Kurulum & Danışmanlık</h3>
                  <p className="mt-1 text-xs text-slate-300">
                    Discord, FiveM ve web için uçtan uca kurulum.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 p-4 text-xs text-slate-300 ring-1 ring-white/10">
                Ödeme ve otomatik teslimat sistemleri (iyzico / Shopier),
                onay süreci tamamlandıktan sonra aktif edilmektedir.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ÖZELLİKLER */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card rounded-3xl p-6">
            <h3 className="text-base font-semibold">Hızlı Kurulum</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Sunucu yapına göre kurulum şablonu ve ince ayarlarla hızlı teslim.
            </p>
          </div>
          <div className="card rounded-3xl p-6">
            <h3 className="text-base font-semibold">Stabil Altyapı</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Optimize ayarlar, loglama, güvenlik ve performans odaklı yapı.
            </p>
          </div>
          <div className="card rounded-3xl p-6">
            <h3 className="text-base font-semibold">Topluluk Odaklı</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Geri bildirimlerle gelişen paketler ve aktif destek kanalları.
            </p>
          </div>
        </div>
      </section>

      {/* YORUMLAR */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Doğrulanmış Müşteri Yorumları</h2>
            <p className="mt-2 text-sm text-slate-300">
              Gerçek kullanıcı geri bildirimleri (örnek).
            </p>
          </div>
          <Link
            href="/referanslar"
            className="hidden rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/15 hover:bg-white/15 md:inline-flex"
          >
            Tümünü Gör
          </Link>
        </div>
      </section>

      {/* SSS */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="card rounded-3xl p-6 md:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Sık Sorulan Sorular</h2>
              <p className="mt-2 text-sm text-slate-300">
                En çok gelen soruların kısa cevapları.
              </p>
            </div>
            <Link
              href="/sss"
              className="hidden rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/15 hover:bg-white/15 md:inline-flex"
            >
              Tam S.S.S.
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
