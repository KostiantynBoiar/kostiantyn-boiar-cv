import { config, profile } from '../data/cv'

export function Hero() {
  return (
    <section className="pt-[96px]">
      <h1 className="m-0 max-w-[19ch] text-display font-medium leading-[1.1] tracking-[-0.028em] text-pretty">
        {profile.headline}
      </h1>

      <p className="mt-[34px] max-w-[62ch] text-lead leading-[1.62] text-copy text-pretty">
        {profile.intro}
      </p>

      <div className="mt-[38px] flex flex-wrap gap-x-[28px] gap-y-[10px] font-mono text-contact tracking-[0.02em] text-muted">
        <a
          href={`mailto:${profile.email}`}
          className="border-b border-rule pb-px text-ink hover:border-ink"
        >
          {profile.email}
        </a>
        {config.showPhone && <span>{profile.phone}</span>}
        <span>{profile.location}</span>
      </div>
    </section>
  )
}
