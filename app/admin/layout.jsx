export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = { title: "AceHub Admin" };

export default function Layout({ children }) {
  return (
    <div className="grid gap-6">
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/20 p-6">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <p className="mt-2 text-sm text-neutral-300">Lisans, kullanıcı ve ödeme yönetimi.</p>
        <div className="mt-4 flex gap-2 text-sm">
          <a className="rounded-lg border border-neutral-700 px-3 py-1 hover:border-neutral-500" href="/admin">Dashboard</a>
          <a className="rounded-lg border border-neutral-700 px-3 py-1 hover:border-neutral-500" href="/admin/lisanslar">Lisanslar</a>
          <a className="rounded-lg border border-neutral-700 px-3 py-1 hover:border-neutral-500" href="/admin/siparisler">Siparişler</a>
          <a className="rounded-lg border border-neutral-700 px-3 py-1 hover:border-neutral-500" href="/admin/ayarlar">Ayarlar</a>
        </div>
      </div>
      {children}
    </div>
  );
}
