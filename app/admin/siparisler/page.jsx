export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { prisma } from "../../../lib/prisma";
import { formatTRY } from "../../../lib/products";

export default async function Orders() {
  const items = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
    include: { user: true, license: true },
  });

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/20 overflow-hidden">
      <div className="px-6 py-4 border-b border-neutral-800 font-semibold">Son Siparişler</div>
      <div className="divide-y divide-neutral-800">
        {items.map((o) => (
          <div key={o.id} className="px-6 py-4 flex flex-col gap-1">
            <div className="text-sm">
              <span className="font-semibold">{o.provider}</span> • {formatTRY(o.amountKurus)} • <span className="text-neutral-300">{o.status}</span>
            </div>
            <div className="text-xs text-neutral-500">
              {o.user ? `Kullanıcı: ${o.user.email}` : "Kullanıcı: -"} • Lisans: {o.license ? o.license.code : "-"} • Ref: {o.providerRef || "-"}
            </div>
          </div>
        ))}
        {items.length === 0 ? <div className="px-6 py-6 text-sm text-neutral-400">Henüz sipariş yok.</div> : null}
      </div>
    </div>
  );
}
