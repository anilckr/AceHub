"use client";

import { useEffect, useState } from "react";

export default function IyzicoCheckout({ params }) {
  const { orderId } = params;
  const [html, setHtml] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/pay/iyzico/render?orderId=${encodeURIComponent(orderId)}`);
      const data = await res.json();
      if (!res.ok) return setErr(data?.error || "Hata");
      setHtml(data.checkoutFormContent);
    })();
  }, [orderId]);

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold">iyzico Ödeme</h1>
      <p className="mt-2 text-neutral-300">Ödeme formu aşağıda yüklenecek.</p>
      {err ? <div className="mt-4 text-sm text-red-400">{err}</div> : null}
      <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/20 p-6">
        {/* iyzico returns HTML snippet */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
