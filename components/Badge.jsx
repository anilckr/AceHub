export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/15">
      {children}
    </span>
  );
}
