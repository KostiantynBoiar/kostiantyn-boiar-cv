import { navLinks, profile } from '../data/cv'

export function SiteHeader() {
  return (
    <header className="flex flex-wrap items-baseline justify-between gap-[20px] pt-[34px]">
      <div className="text-wordmark font-medium tracking-[-0.01em]">{profile.name}</div>

      <nav className="flex flex-wrap gap-[22px] font-mono text-meta uppercase tracking-[0.1em] text-muted">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="border-b border-transparent pb-[2px] text-muted hover:border-ink hover:text-ink"
          >
            {link.label}
          </a>
        ))}
        <a
          href={profile.cvFile}
          download={profile.cvFile}
          className="border-b border-rule pb-[2px] text-ink hover:border-ink"
        >
          CV ↓
        </a>
      </nav>
    </header>
  )
}
