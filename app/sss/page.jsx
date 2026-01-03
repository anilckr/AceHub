export default function SssPage() {
  const items = [
    { q: "Kurulum ne kadar sürer?", a: "Ortalama 30-120 dakika. Sunucu büyüklüğü ve istenen entegrasyonlara göre değişebilir." },
    { q: "Süre sorgulama nasıl çalışır?", a: "Şablonda demo form var. Gerçek kullanım için lisans anahtarı/veritabanı ile bağlanır." },
    { q: "İade var mı?", a: "Dijital ürünlerde iade politikası sağlayıcıya göre değişir. Kendi politikanı buraya ekleyebilirsin." },
    { q: "Özel istek/komut eklenir mi?", a: "Evet. Ultimate paket veya özel geliştirme kapsamında yapılabilir." },
    { q: "Destek nereden?", a: "Discord üzerinden ticket. Link: discord.gg/AceHub" },
  ];

  return (
    <main className="gradient-bg">
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Sık Sorulan Sorular</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
          En çok sorulan konular. Akordeon yapısı ile düzenlenmiştir.
        </p>

        <div className="mt-8 grid gap-3">
          {items.map((it) => (
            <details key={it.q} className="card rounded-3xl p-6">
              <summary className="cursor-pointer text-sm font-semibold text-slate-200">{it.q}</summary>
              <p className="mt-2 text-sm text-slate-300">{it.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
