export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { prisma } from "../../lib/prisma";

export default async function AdminHome() {
  const [users, licenses, orders, activeLicenses] = await Promise.all([
    prisma.user.count(),
    prisma.license.count(),
    prisma.order.count(),
    prisma.license.count({ where: { status: "ACTIVE" } }),
  ]);

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {[
        ["Kullanıcı", users],
        ["Lisans", licenses],
        ["Aktif Lisans", activeLicenses],
        ["Sipariş", orders],
      ].map(([t, v]) => (
        <div key={t} className="rounded-2xl border border-neutral-800 bg-neutral-900/20 p-6">
          <div className="text-sm text-neutral-400">{t}</div>
          <div className="mt-2 text-3xl font-bold">{v}</div>
        </div>
      ))}
    </div>
  );
}
