import { config, profile } from '../data/cv'

export function SiteFooter() {
  return (
    <footer className="mt-[104px] flex flex-wrap items-baseline justify-between gap-x-[32px] gap-y-[18px] border-t border-ink pt-[34px] font-mono text-meta tracking-[0.04em] text-muted">
      <div className="flex flex-wrap gap-x-[24px] gap-y-[10px]">
        <a
          href={`mailto:${profile.email}`}
          className="border-b border-rule pb-px text-ink hover:border-ink"
        >
          Email
        </a>
        {config.showPhone && (
          <a
            href={profile.phoneHref}
            className="border-b border-rule pb-px text-ink hover:border-ink"
          >
            {profile.phone}
          </a>
        )}
        <a
          href={profile.cvFile}
          download={profile.cvFile}
          className="border-b border-rule pb-px text-ink hover:border-ink"
        >
          Full CV, PDF ↓
        </a>
      </div>
      <div>{profile.languages}</div>
    </footer>
  )
}
