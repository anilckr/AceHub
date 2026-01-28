"use client";

import { useState } from "react";

export default function CreateLicenseCard() {
  const [email, setEmail] = useState("");
  const [days, setDays] = useState(30);
  const [note, setNote] = useState("");
  const [out, setOut] = useState("");
  const [err, setErr] = useState("");

  async function create(e) {
    e.preventDefault();
    setErr("");
    setOut("");
    const res = await fetch("/api/admin/licenses/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email || null, durationDays: Number(days), note: note || null }),
    });
    const data = await res.json();
    if (!res.ok) {
      setErr(data?.error || "Hata");
      return;
    }
    setOut(`Oluşturuldu: ${data.code} (Bitiş: ${data.expiresAt})`);
    setEmail("");
    setDays(30);
    setNote("");
  }

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/20 p-6">
      <div className="font-semibold">Lisans Oluştur</div>
      <p className="mt-1 text-sm text-neutral-400">Email girersen lisans kullanıcıya atanır; boş bırakırsan “atanmamış” olur.</p>

      <form onSubmit={create} className="mt-4 grid gap-3 md:grid-cols-4">
        <input
          className="rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 outline-none focus:border-neutral-400 md:col-span-2"
          placeholder="Kullanıcı email (opsiyonel)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 outline-none focus:border-neutral-400"
          type="number"
          min="1"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
        <button className="rounded-lg bg-neutral-100 text-neutral-900 px-4 py-2 font-medium">Oluştur</button>

        <input
          className="rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 outline-none focus:border-neutral-400 md:col-span-4"
          placeholder="Not (opsiyonel)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </form>

      {err ? <div className="mt-3 text-sm text-red-400">{err}</div> : null}
      {out ? <div className="mt-3 text-sm text-green-400">{out}</div> : null}
    </div>
  );
}
