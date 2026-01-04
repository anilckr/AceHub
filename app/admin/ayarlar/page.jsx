export default function Settings() {
  return (
    <div className="grid gap-6">
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/20 p-6">
        <div className="font-semibold">Ortam Değişkenleri</div>
        <p className="mt-2 text-sm text-neutral-400">
          Ödeme entegrasyonları için Vercel'de Project → Settings → Environment Variables kısmından ayarlayacaksın.
        </p>
        <ul className="mt-4 text-sm text-neutral-300 list-disc pl-5 space-y-1">
          <li><code className="text-neutral-100">DATABASE_URL</code></li>
          <li><code className="text-neutral-100">NEXTAUTH_SECRET</code></li>
          <li><code className="text-neutral-100">IYZICO_API_KEY</code>, <code className="text-neutral-100">IYZICO_SECRET_KEY</code>, <code className="text-neutral-100">IYZICO_BASE_URL</code></li>
          <li><code className="text-neutral-100">SHOPIER_API_KEY</code>, <code className="text-neutral-100">SHOPIER_API_SECRET</code>, <code className="text-neutral-100">SHOPIER_STORE_ID</code></li>
        </ul>
      </div>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/20 p-6">
        <div className="font-semibold">Süre Düşme Mantığı</div>
        <p className="mt-2 text-sm text-neutral-400">
          Lisans süresi veritabanında <code className="text-neutral-100">expiresAt</code> olarak tutulur. Kalan süre istek anında hesaplanır.
          Ek olarak, expired lisansları işaretlemek için cron endpointi var: <code className="text-neutral-100">/api/cron/sync-licenses</code>.
        </p>
      </div>
    </div>
  );
}
