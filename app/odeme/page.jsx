"use client";

import { useSearchParams } from "next/navigation";

export default function PayClient() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      Ödeme durumu: {status ?? "Bekleniyor"}
    </div>
  );
}
