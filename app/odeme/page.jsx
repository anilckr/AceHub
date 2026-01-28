export const dynamic = "force-dynamic";
export const revalidate = 0;

import { Suspense } from "react";
import PayClient from "./PayClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="max-w-3xl mx-auto px-4 py-10">Yükleniyor...</div>}>
      <PayClient />
    </Suspense>
  );
}
