import { Suspense } from "react";
import LoginClient from "./LoginClient";

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto max-w-6xl px-4 py-20">
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            Yükleniyor...
          </div>
        </main>
      }
    >
      <LoginClient />
    </Suspense>
  );
}
