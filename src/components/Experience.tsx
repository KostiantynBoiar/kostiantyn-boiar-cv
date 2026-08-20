import { useState } from 'react'
import { config, roles } from '../data/cv'
import type { ExperienceLayout, Role } from '../types'
import { SectionHeader } from './SectionHeader'

export function Experience() {
  const [layout, setLayout] = useState<ExperienceLayout>(config.experienceLayout)

  return (
    <section id="experience" className="scroll-reveal pt-[104px]">
      <SectionHeader
        number="02"
        title="Experience"
        aside={
          <div className="flex items-center gap-[2px]">
            <LayoutButton
              label="Prose"
              active={layout === 'Prose'}
              onClick={() => setLayout('Prose')}
            />
            <LayoutButton
              label="Ledger"
              active={layout === 'Ledger'}
              onClick={() => setLayout('Ledger')}
            />
          </div>
        }
      />

      <div>
        {roles.map((role, index) =>
          layout === 'Prose' ? (
            <ProseRole key={role.company} role={role} padding={spacing(index)} />
          ) : (
            <LedgerRole key={role.company} role={role} padding={spacing(index)} />
          ),
        )}
      </div>
    </section>
  )
}

/** First article opens wider than the rest; the last drops its rule. */
function spacing(index: number) {
  if (index === 0) return 'border-b border-rule pt-[38px] pb-[34px]'
  if (index === roles.length - 1) return 'pt-[34px]'
  return 'border-b border-rule py-[34px]'
}

type LayoutButtonProps = {
  label: string
  active: boolean
  onClick: () => void
}

function LayoutButton({ label, active, onClick }: LayoutButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer border px-[10px] py-[5px] font-[inherit] text-tag uppercase tracking-[0.1em] transition-[background-color,color,border-color] duration-[180ms] hover:border-ink ${
        active ? 'border-ink bg-ink text-canvas' : 'border-rule bg-transparent text-subtle'
      }`}
    >
      {label}
    </button>
  )
}

function RoleTitle({ role }: { role: Role }) {
  return (
    <h3 className="m-0 text-title font-medium tracking-[-0.015em]">
      {role.company}
      <span className="font-normal text-faint"> · </span>
      <span className="font-normal text-copy">{role.role}</span>
    </h3>
  )
}

type RoleProps = {
  role: Role
  padding: string
}

function ProseRole({ role, padding }: RoleProps) {
  return (
    <article className={padding}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-[18px] gap-y-[6px]">
        <RoleTitle role={role} />
        <div className="font-mono text-meta tracking-[0.05em] text-muted">
          {role.start} {role.end} · {role.location}
        </div>
      </div>

      <ul className="mt-[16px] max-w-[66ch] list-disc pl-[17px] text-body leading-[1.62] text-copy">
        {role.bullets.map((bullet, index) => (
          <li key={bullet} className={index === role.bullets.length - 1 ? undefined : 'mb-[7px]'}>
            {bullet}
          </li>
        ))}
      </ul>

      {config.showTechStacks && (
        <div className="mt-[18px] max-w-[70ch] font-mono text-meta leading-[1.6] tracking-[0.03em] text-subtle">
          {role.stack}
        </div>
      )}
    </article>
  )
}

function LedgerRole({ role, padding }: RoleProps) {
  return (
    <article className={`grid grid-cols-[150px_1fr] gap-[28px] ${padding}`}>
      <div className="font-mono text-meta leading-[1.7] tracking-[0.04em] text-muted">
        {role.start}
        <br />
        {role.end}
        <br />
        <span className="text-faint">{role.location}</span>
      </div>

      <div>
        <RoleTitle role={role} />

        <p className="mt-[11px] max-w-[58ch] text-body leading-[1.6] text-copy text-pretty">
          {role.summary}
        </p>

        <div className="mt-[22px] grid grid-cols-3 gap-[18px] border-t border-rule pt-[18px]">
          {role.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-stat font-medium tracking-[-0.02em]">{metric.value}</div>
              <div className="mt-[4px] font-mono text-eyebrow uppercase leading-[1.5] tracking-[0.07em] text-subtle">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {config.showTechStacks && (
          <div className="mt-[18px] max-w-[66ch] font-mono text-meta leading-[1.6] tracking-[0.03em] text-subtle">
            {role.stack}
          </div>
        )}
      </div>
    </article>
  )
}
