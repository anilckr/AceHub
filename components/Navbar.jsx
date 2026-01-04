"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data } = useSession();

  return (
    <header className="border-b border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">AceHub</Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/urunler" className="opacity-90 hover:opacity-100">Ürünler</Link>
          <Link href="/sure-sorgulama" className="opacity-90 hover:opacity-100">Süre Sorgulama</Link>
          <Link href="/hakkimizda" className="opacity-90 hover:opacity-100">Hakkımızda</Link>
          <Link href="/sss" className="opacity-90 hover:opacity-100">S.S.S</Link>
          {data?.user ? (
            <>
              {data.user.role === "ADMIN" ? (
                <Link href="/admin" className="opacity-90 hover:opacity-100">Admin</Link>
              ) : null}
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="rounded-lg border border-neutral-700 px-3 py-1 hover:border-neutral-500"
              >
                Çıkış
              </button>
            </>
          ) : (
            <Link href="/login" className="rounded-lg border border-neutral-700 px-3 py-1 hover:border-neutral-500">
              Giriş
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
