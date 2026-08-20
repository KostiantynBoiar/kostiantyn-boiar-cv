import { projects } from '../data/cv'
import type { Project } from '../types'
import { SectionHeader } from './SectionHeader'

export function Projects() {
  return (
    <section id="projects" className="scroll-reveal pt-[104px]">
      <SectionHeader
        number="03"
        title="Selected systems"
        aside={<span className="text-muted">Live products ↗</span>}
      />

      {/* The 1px grid gap over a rule-coloured background draws the hairlines;
          each card bleeds 26px outward so its padding lines up with the page. */}
      <div className="mt-[34px] grid grid-cols-2 gap-px bg-rule">
        {projects.map((project, index) => (
          <Card key={project.title} project={project} bleed={index % 2 === 0 ? 'left' : 'right'} />
        ))}
      </div>
    </section>
  )
}

type CardProps = {
  project: Project
  bleed: 'left' | 'right'
}

function Card({ project, bleed }: CardProps) {
  const offset = bleed === 'left' ? 'ml-[-26px]' : 'mr-[-26px]'

  const inner = (
    <>
      <div className="flex items-baseline justify-between gap-[12px] font-mono text-eyebrow uppercase tracking-[0.09em] text-subtle">
        <span>{project.org}</span>
        <span className={project.href ? undefined : 'text-faint'}>{project.kind}</span>
      </div>

      <h3
        className={
          project.href
            ? 'mt-[10px] inline-block text-card font-medium tracking-[-0.015em] shadow-[inset_0_-1px_0_var(--color-underline)] hover:shadow-[inset_0_-2px_0_var(--color-ink)]'
            : 'mt-[10px] text-card font-medium tracking-[-0.015em]'
        }
      >
        {project.title}
      </h3>

      <p className="mt-[9px] text-card-body leading-[1.58] text-copy text-pretty">
        {project.description}
      </p>

      <div className="mt-[16px] font-mono text-meta tracking-[0.03em] text-muted">
        {project.metrics}
      </div>
    </>
  )

  if (!project.href) {
    return <div className={`bg-canvas p-[26px] ${offset}`}>{inner}</div>
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener"
      className={`block bg-canvas p-[26px] hover:bg-wash ${offset}`}
    >
      {inner}
    </a>
  )
}
