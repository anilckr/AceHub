"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { signOut, useSession } from "next-auth/react";

const nav = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Ürünler", href: "/urunler" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Süre Sorgulama", href: "/sure-sorgulama" },
  { label: "S.S.S.", href: "/sss" },
  { label: "Panel", href: "/panel" },
];

function cls(...a) {
  return a.filter(Boolean).join(" ");
}

const LOGO_URL =
  "https://cdn.discordapp.com/attachments/1211412024987357294/1459922145210531991/image.png?ex=696509f3&is=6963b873&hm=04b5b799dd650e808862f283e2de2b904daf204b6a9ffcf77f1e068cf7beb480&"; // BURAYA KENDİ DİREKT LOGO LİNKİNİ KOY

function AceHubIcon() {
  return (
    <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
      <svg
        viewBox="0 0 64 64"
        className="h-7 w-7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="AceHub"
        role="img"
      >
        <defs>
          <linearGradient id="acehubGrad" x1="10" y1="8" x2="54" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6D5EF6" />
            <stop offset="1" stopColor="#41E0B9" />
          </linearGradient>
        </defs>

        <path
          d="M24.8 13.6c2.3-1.3 5.1-1.3 7.4 0l18.2 10.5c2.3 1.3 3.7 3.7 3.7 6.4v2.9c0 2.7-1.4 5.1-3.7 6.4L32.2 50.7c-2.3 1.3-5.1 1.3-7.4 0L6.6 40.2C4.3 38.9 2.9 36.5 2.9 33.8v-2.9c0-2.7 1.4-5.1 3.7-6.4l18.2-10.5z"
          stroke="url(#acehubGrad)"
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M37.5 46.5l7.6-4.3"
          stroke="url(#acehubGrad)"
          strokeWidth="6.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);

  const activeHref = useMemo(() => {
    if (!pathname) return "/";
    return pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          {logoOk ? (
            <img
              src={LOGO_URL}
              alt="AceHub"
              className="h-9 w-9 rounded-xl object-contain select-none ring-1 ring-white/10 bg-white/5"
              draggable="false"
              onError={() => setLogoOk(false)}
            />
          ) : (
            <AceHubIcon />
          )}

          <span className="text-base font-semibold tracking-tight">AceHub</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          {nav.map((item) => {
            const isActive = item.href === "/" ? activeHref === "/" : activeHref.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cls("hover:text-white", isActive && "text-white")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {session?.user ? (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="hidden md:inline-flex items-center justify-center rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
            >
              Çıkış
            </button>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Link className="inline-flex items-center justify-center rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15" href="/login">
                Giriş
              </Link>
              <Link className="inline-flex items-center justify-center rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15" href="/kayit">
                Kayıt
              </Link>
            </div>
          )}
          <a
            href="https://discord.gg/Pq9MhPE7ak"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
          >
            Discord’a Katıl
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            Menü
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cls("border-t border-white/10 bg-slate-950/90 md:hidden", !open && "hidden")}
      >
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="grid gap-2 text-sm text-slate-200">
            {nav.map((item) => {
              const isActive = item.href === "/" ? activeHref === "/" : activeHref.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cls(
                    "rounded-xl px-3 py-2 hover:bg-white/10 hover:text-white",
                    isActive && "bg-white/10 text-white"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-2 grid gap-2">
              {session?.user ? (
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="rounded-xl px-3 py-2 bg-white/10 ring-1 ring-white/15 text-white"
                >
                  Çıkış
                </button>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="rounded-xl px-3 py-2 bg-white/10 ring-1 ring-white/15 text-white"
                    onClick={() => setOpen(false)}
                  >
                    Giriş
                  </Link>
                  <Link
                    href="/kayit"
                    className="rounded-xl px-3 py-2 bg-white/10 ring-1 ring-white/15 text-white"
                    onClick={() => setOpen(false)}
                  >
                    Kayıt
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
