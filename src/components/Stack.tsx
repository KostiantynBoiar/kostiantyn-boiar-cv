import { stack } from '../data/cv'
import { SectionHeader } from './SectionHeader'

export function Stack() {
  return (
    <section id="stack" className="scroll-reveal pt-[104px]">
      <SectionHeader number="04" title="Stack" />

      <dl className="mt-[30px] grid grid-cols-[190px_1fr] gap-0">
        {stack.map((row, index) => {
          const rule = index === stack.length - 1 ? '' : 'border-b border-rule'
          return (
            <div key={row.label} className="contents">
              <dt
                className={`py-[15px] font-mono text-meta uppercase tracking-[0.07em] text-muted ${rule}`}
              >
                {row.label}
              </dt>
              <dd className={`m-0 py-[15px] text-body leading-[1.5] text-ink ${rule}`}>
                {row.value}
              </dd>
            </div>
          )
        })}
      </dl>
    </section>
  )
}
