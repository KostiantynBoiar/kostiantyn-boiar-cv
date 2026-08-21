import { config, profile } from '../data/cv'

export function Hero() {
  return (
    <section className="pt-[96px]">
      {/* The headline runs the full measure of the container; `balance` keeps
          the rag even now that it is no longer capped at 19ch. */}
      <h1 className="m-0 text-display font-medium leading-[1.1] tracking-[-0.028em] text-balance">
        {profile.headline}
      </h1>

      {/* Lead left, contact flush right — the contact block fills the space the
          lead's 62ch measure leaves over. */}
      <div className="mt-[34px] flex flex-wrap items-baseline justify-between gap-x-[64px] gap-y-[26px]">
        <p className="max-w-[62ch] text-lead leading-[1.62] text-copy text-pretty">
          {profile.intro}
        </p>

        <div className="flex flex-col gap-[9px] font-mono text-contact tracking-[0.02em] text-muted sm:items-end sm:text-right">
          <a
            href={`mailto:${profile.email}`}
            className="border-b border-rule pb-px text-ink hover:border-ink"
          >
            {profile.email}
          </a>
          {config.showPhone && <span>{profile.phone}</span>}
          <span>{profile.location}</span>
        </div>
      </div>
    </section>
  )
}
