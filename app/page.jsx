import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <section className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-8">
        <h1 className="text-4xl font-bold">AceHub ile güvenli lisans yönetimi.</h1>
        <p className="mt-3 max-w-2xl text-neutral-300">
          Admin panel, kimlik doğrulama, lisans kodu üretimi, ödeme entegrasyonu (iyzico + Shopier) ve süre takibi için hazır altyapı.
        </p>
        <div className="mt-6 flex gap-3">
          <Link className="rounded-lg bg-neutral-100 text-neutral-900 px-4 py-2 font-medium" href="/urunler">Paketler</Link>
          <Link className="rounded-lg border border-neutral-700 px-4 py-2 hover:border-neutral-500" href="/sure-sorgulama">Süre Sorgula</Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["Admin Panel", "Kullanıcılar, lisanslar, siparişler, ödeme ayarları."],
          ["Auth", "Admin login + route koruma (NextAuth)."],
          ["Süre Takibi", "expiresAt üzerinden otomatik kalan süre / bitiş kontrolü."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-neutral-800 bg-neutral-900/20 p-6">
            <div className="font-semibold">{t}</div>
            <div className="mt-2 text-sm text-neutral-300">{d}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
