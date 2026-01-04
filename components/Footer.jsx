export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-400 flex flex-col gap-2">
        <div>© {new Date().getFullYear()} AceHub</div>
        <div className="flex gap-3">
          <a href="https://discord.gg/AceHub" target="_blank" rel="noreferrer" className="hover:text-neutral-200">Discord</a>
          <a href="/hakkimizda" className="hover:text-neutral-200">Hakkımızda</a>
        </div>
      </div>
    </footer>
  );
}
