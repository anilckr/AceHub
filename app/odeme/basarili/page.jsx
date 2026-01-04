export default function Page({ searchParams }) {
  const code = searchParams?.code;
  return (
    <div className="max-w-xl rounded-2xl border border-neutral-800 bg-neutral-900/20 p-8">
      <h1 className="text-3xl font-bold">Ödeme Başarılı</h1>
      <p className="mt-3 text-neutral-300">Lisans kodun:</p>
      <div className="mt-3 font-mono text-xl">{code || "—"}</div>
      <p className="mt-3 text-sm text-neutral-400">Süre sorgulama sayfasından kontrol edebilirsin.</p>
    </div>
  );
}
