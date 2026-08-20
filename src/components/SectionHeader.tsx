import type { ReactNode } from 'react'
import { config } from '../data/cv'

type SectionHeaderProps = {
  number: string
  title: string
  /** Right-aligned slot — a note, or the experience layout toggle. */
  aside?: ReactNode
}

export function SectionHeader({ number, title, aside }: SectionHeaderProps) {
  return (
    <div className="flex items-baseline gap-[14px] border-b border-ink pb-[11px] font-mono text-meta uppercase tracking-[0.13em]">
      {config.showSectionNumbers && <span className="text-faint">{number}</span>}
      <span>{title}</span>
      <span className="flex-1" />
      {aside}
    </div>
  )
}
