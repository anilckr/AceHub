export function getBaseUrl() {
  // Prefer explicit NEXTAUTH_URL for both auth & payment callbacks
  if (process.env.NEXTAUTH_URL) return process.env.NEXTAUTH_URL.replace(/\/$/, "");
  // Vercel provides VERCEL_URL without protocol
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}
