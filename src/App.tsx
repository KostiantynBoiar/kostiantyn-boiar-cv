import { useState } from 'react'
import { SiteHeader } from './components/SiteHeader'
import { Hero } from './components/Hero'
import { Research } from './components/Research'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Stack } from './components/Stack'
import { Education } from './components/Education'
import { SiteFooter } from './components/SiteFooter'
import { PdfOverlay, type PdfTarget } from './components/PdfOverlay'

export default function App() {
  const [pdf, setPdf] = useState<PdfTarget | null>(null)

  return (
    <div className="min-h-screen px-[28px] pb-[110px]">
      <div className="mx-auto max-w-[880px]">
        <SiteHeader />
        <Hero />
        <Experience />
        <Research onOpenPdf={setPdf} />
        <Projects />
        <Stack />
        <Education />
        <SiteFooter />
      </div>

      <PdfOverlay pdf={pdf} onClose={() => setPdf(null)} />
    </div>
  )
}
