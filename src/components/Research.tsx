import { papers, researchNote } from '../data/cv'
import type { Paper } from '../types'
import { SectionHeader } from './SectionHeader'
import type { PdfTarget } from './PdfOverlay'

type ResearchProps = {
  onOpenPdf: (pdf: PdfTarget) => void
}

export function Research({ onOpenPdf }: ResearchProps) {
  return (
    <section id="research" className="scroll-reveal pt-[104px]">
      <SectionHeader
        number="01"
        title="Research"
        aside={<span className="text-muted">Papers open in place ↗</span>}
      />

      <div className="pt-[30px] font-mono text-contact leading-[1.6] text-muted">
        {researchNote}
      </div>

      {papers.map((paper, index) => {
        const isLast = index === papers.length - 1
        return (
          <article
            key={paper.href}
            className={
              isLast
                ? 'grid grid-cols-[112px_1fr] gap-[28px] pt-[36px]'
                : 'grid grid-cols-[112px_1fr] gap-[28px] border-b border-rule pt-[40px] pb-[36px]'
            }
          >
            <div className="font-mono text-meta leading-[1.65] tracking-[0.04em] text-muted">
              {paper.year}
              <br />
              {paper.place}
            </div>

            <div>
              <h3
                className="m-0 text-title font-medium leading-[1.35] tracking-[-0.015em] text-pretty"
                style={{ maxWidth: paper.titleMeasure }}
              >
                <PaperLink paper={paper} onOpenPdf={onOpenPdf}>
                  {paper.title}
                </PaperLink>
              </h3>

              {paper.summary && (
                <p className="mt-[12px] max-w-[60ch] text-body leading-[1.6] text-copy text-pretty">
                  {paper.summary}
                </p>
              )}

              {paper.bullets && (
                <ul className="mt-[14px] max-w-[60ch] list-disc pl-[17px] text-body leading-[1.62] text-copy">
                  {paper.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bullet}
                      className={
                        bulletIndex === paper.bullets!.length - 1 ? undefined : 'mb-[7px]'
                      }
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-[18px] flex flex-wrap items-center gap-x-[10px] gap-y-[8px] font-mono text-tag uppercase tracking-[0.06em] text-muted">
                <a
                  href={paper.href}
                  onClick={(event) => {
                    event.preventDefault()
                    onOpenPdf({ title: paper.overlayTitle, src: paper.href })
                  }}
                  className="inline-flex items-center gap-[7px] border border-ink px-[9px] py-[4px] text-ink hover:bg-ink hover:text-canvas"
                >
                  Read PDF <span>↗</span>
                </a>
                {paper.tags?.map((tag) => (
                  <span key={tag} className="border border-rule px-[9px] py-[4px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        )
      })}
    </section>
  )
}

type PaperLinkProps = {
  paper: Paper
  onOpenPdf: (pdf: PdfTarget) => void
  children: string
}

function PaperLink({ paper, onOpenPdf, children }: PaperLinkProps) {
  return (
    <a
      href={paper.href}
      onClick={(event) => {
        event.preventDefault()
        onOpenPdf({ title: paper.overlayTitle, src: paper.href })
      }}
      className="text-ink shadow-[inset_0_-1px_0_var(--color-underline)] hover:shadow-[inset_0_-2px_0_var(--color-ink)]"
    >
      {children}
    </a>
  )
}
