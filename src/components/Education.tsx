import { education } from '../data/cv'
import { SectionHeader } from './SectionHeader'

export function Education() {
  return (
    <section id="education" className="scroll-reveal pt-[104px]">
      <SectionHeader number="05" title="Education" />

      <div className="mt-[14px]">
        {education.map((entry, index) => (
          <div
            key={entry.degree}
            className={`flex flex-wrap items-baseline justify-between gap-x-[20px] gap-y-[6px] py-[20px] ${
              index === education.length - 1 ? '' : 'border-b border-rule'
            }`}
          >
            <div>
              <div className="text-degree font-medium tracking-[-0.012em]">{entry.degree}</div>
              <div className="mt-[5px] text-card-body text-copy">{entry.institution}</div>
            </div>
            <div className="font-mono text-meta tracking-[0.05em] text-muted">{entry.period}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
