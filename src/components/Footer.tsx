import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-ink-3 md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Dibuat dengan ⚡ &amp; ☕
        </p>
        <a href="#home" className="transition hover:text-cyan">
          ↑ Kembali ke atas
        </a>
      </div>
    </footer>
  )
}