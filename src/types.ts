export type NavLink = {
  label: string
  href: string
}

export type Paper = {
  /** Heading width cap from the design — papers set their own measure. */
  titleMeasure: string
  year: string
  place: string
  title: string
  /** Shorter title used in the PDF overlay header. */
  overlayTitle: string
  href: string
  summary?: string
  bullets?: string[]
  tags?: string[]
}

export type Metric = {
  value: string
  label: string
}

export type Role = {
  company: string
  role: string
  start: string
  end: string
  location: string
  /** Prose layout: achievement bullets. */
  bullets: string[]
  /** Ledger layout: one-paragraph summary plus three headline metrics. */
  summary: string
  metrics: Metric[]
  stack: string
}

export type Project = {
  org: string
  /** Right-hand eyebrow label — "Product ↗" for shipped, "Internal" otherwise. */
  kind: string
  title: string
  description: string
  metrics: string
  href?: string
}

export type StackRow = {
  label: string
  value: string
}

export type Degree = {
  degree: string
  institution: string
  period: string
}

export type ExperienceLayout = 'Prose' | 'Ledger'
