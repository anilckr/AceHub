"use client";

import { useState } from "react";

export default function SureSorgulamaPage() {
  const [key, setKey] = useState("");
  const [result, setResult] = useState(null);

  function onSubmit(e) {
    e.preventDefault();
    const v = (key || "").trim().toUpperCase();
    if (!v) {
      setResult({ ok: false, msg: "Lütfen bir anahtar gir." });
      return;
    }
    const ok = /^ACEHUB-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(v);
    setResult(
      ok
        ? { ok: true, msg: "Anahtar doğrulandı (demo). Kalan süre: 27 gün" }
        : { ok: false, msg: "Anahtar bulunamadı (demo). Format: ACEHUB-1A2B-3C4D" }
    );
  }

  return (
    <main className="gradient-bg">
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Süre Sorgulama</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
          Bu sayfa demo amaçlıdır. Gerçek kullanımda anahtar/veritabanı ile eşleştirilerek kalan süre gösterilir.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="card rounded-3xl p-6 md:p-8">
            <h2 className="text-base font-semibold">Lisans Anahtarı Gir</h2>
            <form onSubmit={onSubmit} className="mt-4 space-y-3">
              <label className="grid gap-2 text-sm">
                <span className="text-slate-200">Anahtar</span>
                <input
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Örn: ACEHUB-XXXX-XXXX"
                />
              </label>
              <button className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">
                Sorgula (Demo)
              </button>
            </form>

            {result && (
              <div className="mt-4 rounded-2xl bg-white/5 p-4 text-sm text-slate-200 ring-1 ring-white/10">
                <div className={result.ok ? "font-semibold text-emerald-200" : "font-semibold text-rose-200"}>
                  {result.ok ? "Başarılı" : "Hata"}
                </div>
                <div className="mt-1 text-slate-300">{result.msg}</div>
              </div>
            )}
          </div>

          <div className="card rounded-3xl p-6 md:p-8">
            <h2 className="text-base font-semibold">Gerçek Entegrasyon</h2>
            <p className="mt-2 text-sm text-slate-300">İstersen bunu gerçek yaparız:</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> MongoDB/MySQL/PostgreSQL lisans tablosu</li>
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> Admin panel (lisans oluştur/süre uzat)</li>
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> API endpoint + rate limit</li>
              <li className="flex gap-2"><span className="text-emerald-300">✓</span> Güvenli doğrulama ve loglama</li>
            </ul>

            <a
              href="https://discord.gg/Pq9MhPE7ak"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold ring-1 ring-white/15 hover:bg-white/15"
            >
              Discord’dan Ulaş
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
