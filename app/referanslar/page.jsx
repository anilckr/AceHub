export default function ReferanslarPage() {
  const reviews = [
[
  {
    name: "Emre",
    text: "Kurulum süreci beklediğimden hızlıydı. Loglama ve ticket sistemi gerçekten iş görüyor.",
    server: "AceHub Community",
  },
  {
    name: "Mert",
    text: "Anti-raid ayarlarını yaptıktan sonra spam ciddi şekilde azaldı. Kafam rahat.",
    server: "NightShift TR",
  },
  {
    name: "Ece",
    text: "Paket içeriği net anlatılmış. Destek ekibi sorularıma kısa sürede döndü.",
    server: "Aurora Hub",
  },
  {
    name: "Kerem",
    text: "Rol ve kanal şablonları sayesinde sıfırdan kurmakla uğraşmadım.",
    server: "PixelTown",
  },
  {
    name: "Deniz",
    text: "Uzun süredir kullanıyoruz, stabilite konusunda hiç sorun yaşamadık.",
    server: "Vortex TR",
  },
  {
    name: "Selin",
    text: "Teslimden sonra da ilgilenmeleri hoşuma gitti. Sorun hemen çözüldü.",
    server: "Nova Guild",
  },
  {
    name: "Burak",
    text: "Kurulumdan sonra sunucu daha düzenli ve yönetilebilir hale geldi.",
    server: "Shadow Realm",
  },
  {
    name: "Ayşe",
    text: "Özellikle moderasyon tarafı çok pratik. Yeni ekip arkadaşları bile zorlanmadı.",
    server: "Luna TR",
  },
  {
    name: "Onur",
    text: "Fiyat/performans olarak gayet iyi. Beklentimi karşıladı.",
    server: "Hexagon Hub",
  },
  {
    name: "Zeynep",
    text: "Dokümantasyon sade ve anlaşılır. Ne nerede hemen bulabiliyorsun.",
    server: "Echo Community",
  },
  {
    name: "Can",
    text: "Raid sırasında sistemin otomatik tepki vermesi baya işimize yaradı.",
    server: "IronCore",
  },
  {
    name: "Furkan",
    text: "Küçük ayarlamalar için bile destekten hızlı dönüş aldım.",
    server: "Orbit TR",
  },
]

  ];

  return (
    <main className="gradient-bg">
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Referanslar</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
          Doğrulanmış müşteri yorumları için örnek bir vitrin. Gerçek yorumları buraya ekleyebilirsin.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name + r.server} className="card rounded-3xl p-6">
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
    </main>
  );
}
