"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const LOCK_KEY = "acehub_auth_lock";
const FAIL_KEY = "acehub_auth_fail";

function isValidEmail(email) {
  // basit ama yeterli regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function getLockUntil() {
  if (typeof window === "undefined") return 0;
  const v = localStorage.getItem(LOCK_KEY);
  return v ? Number(v) : 0;
}

function setLock(msFromNow) {
  const until = Date.now() + msFromNow;
  localStorage.setItem(LOCK_KEY, String(until));
  return until;
}

function clearLock() {
  localStorage.removeItem(LOCK_KEY);
}

function getFailCount() {
  if (typeof window === "undefined") return 0;
  const v = localStorage.getItem(FAIL_KEY);
  return v ? Number(v) : 0;
}

function setFailCount(n) {
  localStorage.setItem(FAIL_KEY, String(n));
}

function clearFailCount() {
  localStorage.removeItem(FAIL_KEY);
}

function formatSeconds(ms) {
  const s = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(s / 60);
  const r = s % 60;
  if (m <= 0) return `${r} sn`;
  return `${m} dk ${r} sn`;
}

export default function LoginClient() {
  const sp = useSearchParams();
  const router = useRouter();
  const next = sp.get("next") || sp.get("callbackUrl") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [globalErr, setGlobalErr] = useState("");

  const [lockUntil, setLockUntilState] = useState(0);
  const [now, setNow] = useState(Date.now());

  // Timer (kilit geri sayımı için)
  useEffect(() => {
    setLockUntilState(getLockUntil());
    const t = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(t);
  }, []);

  const locked = useMemo(() => lockUntil > now, [lockUntil, now]);
  const lockRemaining = useMemo(() => lockUntil - now, [lockUntil, now]);

  function validate() {
    let ok = true;
    setEmailErr("");
    setPasswordErr("");
    setGlobalErr("");

    const e = email.trim();

    if (!e) {
      setEmailErr("Email boş olamaz.");
      ok = false;
    } else if (!isValidEmail(e)) {
      setEmailErr("Geçerli bir email gir (ör: ad@site.com).");
      ok = false;
    }

    if (!password) {
      setPasswordErr("Şifre boş olamaz.");
      ok = false;
    } else if (password.length < 6) {
      setPasswordErr("Şifre en az 6 karakter olmalı.");
      ok = false;
    }

    return ok;
  }

  function applyLockPolicy(nextFailCount) {
    // 5 hatada 30 sn, 8 hatada 2 dk, 10 hatada 5 dk
    if (nextFailCount >= 10) return setLock(5 * 60 * 1000);
    if (nextFailCount >= 8) return setLock(2 * 60 * 1000);
    if (nextFailCount >= 5) return setLock(30 * 1000);
    return 0;
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (locked) return;

    if (!validate()) return;

    setLoading(true);
    setGlobalErr("");

    const res = await signIn("credentials", {
      redirect: false,
      email: email.trim(),
      password,
    });

    setLoading(false);

    if (res?.error) {
      // Hata → fail count arttır + kilit uygula
      const c = getFailCount() + 1;
      setFailCount(c);

      const until = applyLockPolicy(c);
      if (until) setLockUntilState(until);

      setGlobalErr("Email veya şifre hatalı.");
      return;
    }

    // Başarılı giriş → fail/lock temizle
    clearFailCount();
    clearLock();
    setLockUntilState(0);

    router.push(next);
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-20">
      <div className="max-w-md">
        <h1 className="text-3xl font-bold">Giriş</h1>
        <p className="mt-2 text-slate-300">Hesabına giriş yap ve paneline eriş.</p>

        <form
          onSubmit={onSubmit}
          className="mt-6 grid gap-3 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
        >
          <div className="grid gap-1">
            <input
              className={`rounded-lg border bg-slate-950 px-3 py-2 outline-none ${
                emailErr ? "border-red-400/60" : "border-white/15 focus:border-white/30"
              }`}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              inputMode="email"
            />
            {emailErr ? <div className="text-sm text-red-300">{emailErr}</div> : null}
          </div>

          <div className="grid gap-1">
            <div className="relative">
              <input
                className={`w-full rounded-lg border bg-slate-950 px-3 py-2 pr-12 outline-none ${
                  passwordErr ? "border-red-400/60" : "border-white/15 focus:border-white/30"
                }`}
                placeholder="Şifre"
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />

              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-xs text-slate-200 hover:bg-white/10"
                aria-label={showPw ? "Şifreyi gizle" : "Şifreyi göster"}
              >
                {showPw ? "Gizle" : "Göster"}
              </button>
            </div>

            {passwordErr ? <div className="text-sm text-red-300">{passwordErr}</div> : null}
          </div>

          <button
            disabled={loading || locked}
            className="mt-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100 disabled:opacity-60"
          >
            {locked
              ? `Geçici kilit: ${formatSeconds(lockRemaining)}`
              : loading
              ? "Giriş yapılıyor..."
              : "Giriş Yap"}
          </button>

          {globalErr ? (
            <div className="rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-300">
              {globalErr}
            </div>
          ) : null}

          <div className="text-sm text-slate-300">
            Hesabın yok mu? <Link className="underline" href="/kayit">Kayıt ol</Link>
          </div>
        </form>
      </div>
    </main>
  );
}
