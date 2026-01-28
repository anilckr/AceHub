export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import Link from "next/link";
import { prisma } from "../../lib/prisma";
import { requireUser } from "../../lib/authz";

export default async function PanelPage() {
  const session = await requireUser();
  if (!session?.user?.email) {
    return (
      <div className="max-w-xl">
        <h1 className="text-3xl font-bold">Panel</h1>
        <p className="mt-2 text-neutral-300">Devam etmek için giriş yap.</p>
	        <div className="mt-4">
	          <Link className="underline" href="/login">Giriş sayfasına git</Link>
	        </div>
	      </div>
    );
  }

  const user = await prisma.user.findUnique({ where: { email: session.user.email.toLowerCase() } });
  const licenses = await prisma.license.findMany({ where: { userId: user?.id || "" }, orderBy: { createdAt: "desc" } });

  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-3xl font-bold">Panel</h1>
        <p className="mt-2 text-neutral-300">Giriş yapan kullanıcı: {session.user.email}</p>
      </div>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/20 overflow-hidden">
        <div className="px-6 py-4 border-b border-neutral-800 font-semibold">Lisanslarım</div>
        <div className="divide-y divide-neutral-800">
          {licenses.map((l) => (
            <div key={l.id} className="px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <div className="font-mono text-sm">{l.code}</div>
                <div className="text-sm text-neutral-400">Süre: {l.durationDays} gün • Durum: {l.status}</div>
              </div>
              <div className="text-sm text-neutral-400">Bitiş: {new Date(l.expiresAt).toLocaleString("tr-TR")}</div>
            </div>
          ))}
          {licenses.length === 0 ? (
            <div className="px-6 py-6 text-sm text-neutral-400">
              Henüz lisans yok. <Link className="underline" href="/urunler">Ürünlere git</Link>.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
