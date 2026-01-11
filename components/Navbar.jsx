"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

const nav = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Ürünler", href: "/urunler" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Süre Sorgulama", href: "/sure-sorgulama" },
  { label: "S.S.S.", href: "/sss" },
];

function cls(...a) {
  return a.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);

  const activeHref = useMemo(() => {
    if (!pathname) return "/";
    return pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  }, [pathname]);

  // Basit cache-bust (deploy sonrası Vercel eski asset’i tutarsa diye)
  // İstersen kaldırabilirsin ama prod’da işe yarıyor.
  const logoSrc = "/logo.png?v=1";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          {logoOk ? (
            <img
              src={logoSrc}
              alt="AceHub"
              className="h-8 w-8 object-contain select-none"
              draggable="false"
              onError={() => setLogoOk(false)}
            />
          ) : (
            <div
              className="grid h-8 w-8 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15"
              aria-label="AceHub"
            >
              <span className="text-xs font-semibold text-white">AH</span>
            </div>
          )}

          <span className="text-base font-semibold tracking-tight">AceHub</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          {nav.map((item) => {
            const isActive = item.href === "/" ? activeHref === "/" : activeHref.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className={cls("hover:text-white", isActive && "text-white")}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2">
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

      {/* MOBILE MENU */}
      <div id="mobile-menu" className={cls("border-t border-white/10 bg-slate-950/90 md:hidden", !open && "hidden")}>
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
          </div>
        </div>
      </div>
    </header>
  );
}
