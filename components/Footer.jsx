export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
              <span className="text-sm font-semibold">AH</span>
            </div>
            <span className="text-base font-semibold tracking-tight">AceHub</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-300">
            Discord sunucuları için premium bot paketleri, kurulum desteği ve sürdürülebilir hizmet.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white">Hızlı Linkler</h4>
          <div className="grid gap-2 text-sm text-slate-300">
            <a className="hover:text-white" href="/urunler">Ürünler</a>
            <a className="hover:text-white" href="/referanslar">Referanslar</a>
            <a className="hover:text-white" href="/hakkimizda">Hakkımızda</a>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white">Destek</h4>
          <div className="grid gap-2 text-sm text-slate-300">
            <a className="hover:text-white" href="/sss">Sık Sorulan Sorular</a>
            <a className="hover:text-white" href="/sure-sorgulama">Süre Sorgulama</a>
            <a className="hover:text-white" href="mailto:support@acehub.example">support@acehub.example</a>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white">Topluluk</h4>
          <div className="grid gap-2 text-sm text-slate-300">
            <a className="hover:text-white" href="https://discord.gg/Pq9MhPE7ak" target="_blank" rel="noreferrer">Discord</a>
            <a className="hover:text-white" href="https://instagram.com/acehubcode" aria-disabled="true">Instagram</a>
            <a className="hover:text-white" href="#" aria-disabled="true">X (ekle)</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <span>© {year} AceHub. Tüm hakları saklıdır.</span>
        </div>
      </div>
    </footer>
  );
}
