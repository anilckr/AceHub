export default function HakkimizdaPage() {
  return (
    <main className="gradient-bg">
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Hakkımızda</h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
          AceHub; Discord sunucuları için paketlenmiş bot çözümleri, kurulum desteği ve sürdürülebilir bakım odağıyla hizmet veren bir ekiptir.
          Bu sayfadaki içerikler örnektir; kendi hikâyeni buraya yerleştirebilirsin.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="card rounded-3xl p-6">
            <h2 className="text-base font-semibold">Misyon</h2>
            <p className="mt-2 text-sm text-slate-300">Sunucuların operasyon yükünü azaltan, stabil ve ölçeklenebilir çözümler sunmak.</p>
          </div>
          <div className="card rounded-3xl p-6">
            <h2 className="text-base font-semibold">Vizyon</h2>
            <p className="mt-2 text-sm text-slate-300">Türkiye’de ve globalde tercih edilen, güvenilir bir bot/paket ekosistemi oluşturmak.</p>
          </div>
          <div className="card rounded-3xl p-6">
            <h2 className="text-base font-semibold">Değerler</h2>
            <p className="mt-2 text-sm text-slate-300">Şeffaf paket içerikleri, hızlı destek, kaliteli dokümantasyon ve sürekli iyileştirme.</p>
          </div>
        </div>

        <div className="mt-10 card rounded-3xl p-6 md:p-8">
          <h3 className="text-lg font-semibold">Süreç Nasıl İşler?</h3>
          <ol className="mt-4 grid gap-3 text-sm text-slate-200 md:grid-cols-3">
            <li className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <span className="font-semibold">1) İhtiyaç Analizi</span>
              <div className="mt-1 text-xs text-slate-300">Sunucu tipi ve hedefleri netleştiririz.</div>
            </li>
            <li className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <span className="font-semibold">2) Kurulum</span>
              <div className="mt-1 text-xs text-slate-300">Rol/kanal, bot ayarları ve test.</div>
            </li>
            <li className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <span className="font-semibold">3) Teslim & Destek</span>
              <div className="mt-1 text-xs text-slate-300">Doküman + ticket destek.</div>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
