import { useEffect } from 'react'

export type PdfTarget = {
  title: string
  src: string
}

type PdfOverlayProps = {
  pdf: PdfTarget | null
  onClose: () => void
}

export function PdfOverlay({ pdf, onClose }: PdfOverlayProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = pdf ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [pdf])

  if (!pdf) return null

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(14,14,12,0.9)] p-[28px] [animation:reveal_.25s_ease_both]"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="flex h-[92vh] w-full max-w-[1040px] flex-col border border-ink bg-canvas"
      >
        <div className="flex items-center gap-[20px] border-b border-rule px-[18px] py-[14px]">
          <div className="min-w-0 flex-1 truncate font-mono text-meta uppercase tracking-[0.06em] text-ink">
            {pdf.title}
          </div>
          <a
            href={pdf.src}
            target="_blank"
            rel="noopener"
            className="whitespace-nowrap border-b border-rule pb-px font-mono text-tag uppercase tracking-[0.08em] text-muted"
          >
            New tab ↗
          </a>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer border border-rule bg-transparent px-[10px] py-[5px] font-mono text-tag uppercase tracking-[0.08em] text-ink"
          >
            Close ✕
          </button>
        </div>

        <iframe src={pdf.src} title={pdf.title} className="w-full flex-1 border-0 bg-wash" />

        <div className="border-t border-rule px-[18px] py-[10px] font-mono text-eyebrow uppercase tracking-[0.07em] text-faint">
          Esc to close
        </div>
      </div>
    </div>
  )
}
