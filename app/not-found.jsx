import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="text-3xl font-bold">Sayfa bulunamadı</h1>
      <p className="mt-2 text-slate-300">
        Aradığın sayfa yok veya taşınmış olabilir.
      </p>

      <div className="mt-6 flex gap-3">
        <Link
          href="/"
          className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
        >
          Ana Sayfa
        </Link>
        <Link
          href="/urunler"
          className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
        >
          Ürünler
        </Link>
      </div>
    </main>
  );
}
