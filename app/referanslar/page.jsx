export default function ReferanslarPage() {
  const reviews = [
    { name: "Mert", text: "Anti-raid ayarları sayesinde spam ve raid problemi azaldı.", server: "NightShift TR" },
    { name: "Ece", text: "Paket içeriği anlaşılır. Destek ekibi hızlı dönüş yaptı.", server: "Aurora Hub" },
    { name: "Kerem", text: "Roller/kanallar şablonları işimi kolaylaştırdı.", server: "PixelTown" },
    { name: "Deniz", text: "Stabil çalışıyor; ayarları çok pratik.", server: "Vortex TR" },
    { name: "Selin", text: "Teslim sonrası destek güzel, hızlı çözdüler.", server: "Nova Guild" },
  ];

  return (
    <main className="gradient-bg">
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Referanslar</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
          Doğrulanmış müşteri yorumları için örnek bir alan.
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
