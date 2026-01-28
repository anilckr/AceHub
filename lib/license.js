import crypto from "crypto";

export function generateLicenseCode() {
  // ACEHUB-XXXX-XXXX-XXXX (base32-ish)
  const bytes = crypto.randomBytes(9).toString("hex").toUpperCase(); // 18 chars hex
  const p1 = bytes.slice(0, 4);
  const p2 = bytes.slice(4, 8);
  const p3 = bytes.slice(8, 12);
  return `ACEHUB-${p1}-${p2}-${p3}`;
}

export function remainingDays(expiresAt) {
  const ms = new Date(expiresAt).getTime() - Date.now();
  return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)));
}
