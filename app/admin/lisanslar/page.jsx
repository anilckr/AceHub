export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { prisma } from "../../../lib/prisma";
import Link from "next/link";
import CreateLicenseCard from "./ui/CreateLicenseCard";

export default async function Licenses() {
  const items = await prisma.license.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
    include: { user: true },
  });

  return (
    <div className="grid gap-6">
      <CreateLicenseCard />

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/20 overflow-hidden">
        <div className="px-6 py-4 border-b border-neutral-800 font-semibold">Son Lisanslar</div>
        <div className="divide-y divide-neutral-800">
          {items.map((l) => (
            <div key={l.id} className="px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <div className="font-mono text-sm">{l.code}</div>
                <div className="text-sm text-neutral-400">
                  {l.user ? `Kullanıcı: ${l.user.email}` : "Atanmamış"} • Süre: {l.durationDays} gün • Durum: {l.status}
                </div>
              </div>
              <div className="text-sm text-neutral-400">
                Bitiş: {new Date(l.expiresAt).toLocaleString("tr-TR")}
              </div>
            </div>
          ))}
          {items.length === 0 ? (
            <div className="px-6 py-6 text-sm text-neutral-400">Henüz lisans yok.</div>
          ) : null}
        </div>
      </div>

      <div className="text-sm text-neutral-500">
        Not: Kalan süre expiresAt üzerinden hesaplanır; “süre düşme” için ayrıca cron endpointi de var.
      </div>
    </div>
  );
}
