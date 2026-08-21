import type {
  Degree,
  ExperienceLayout,
  NavLink,
  Paper,
  Project,
  Role,
  StackRow,
} from '../types'

/** Toggles that were editor props on the design canvas. */
export const config: {
  showTechStacks: boolean
  showSectionNumbers: boolean
  showPhone: boolean
  experienceLayout: ExperienceLayout
} = {
  showTechStacks: true,
  showSectionNumbers: true,
  showPhone: true,
  experienceLayout: 'Prose',
}

export const profile = {
  name: 'Kostiantyn Boiar',
  email: 'kostya20041234@gmail.com',
  phone: '07379 432368',
  phoneHref: 'tel:+447379432368',
  location: 'Glasgow, UK → St Andrews',
  languages: 'English · Ukrainian · Russian',
  cvFile: 'Kostiantyn-Boiar-CV.pdf',
  headline:
    'I build backend systems that hold up under real load, and research the models that will run inside them.',
  intro:
    'Backend developer, four years in production Python — high-load forecast APIs at OpenWeather, autonomous browser agents at Geniusee. MSc Computer Science at the University of Glasgow; starting a PhD in Computer Science and Neuroscience at the University of St Andrews in September 2026.',
}

export const navLinks: NavLink[] = [
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Systems', href: '#projects' },
  { label: 'Stack', href: '#stack' },
]

export const researchNote =
  'From September 2026 — PhD, Computer Science and Neuroscience, University of St Andrews.'

export const papers: Paper[] = [
  {
    titleMeasure: '44ch',
    year: '2026',
    place: 'In progress',
    title: 'Predicting the Zero-Shot Transfer of a Promptable Video Tracker',
    overlayTitle: 'Predicting the Zero-Shot Transfer of a Promptable Video Tracker',
    href: 'static/sam3-zero-shot-transfer.pdf',
    summary:
      "Forecasting SAM 3's reliability on unseen species and places — from label-free distances. Lead author on the animal-segmentation work: estimating how far a promptable video tracker will transfer to a new domain before any ground truth for it exists.",
    tags: ['Video segmentation', 'Zero-shot transfer', 'PyTorch'],
  },
  {
    titleMeasure: '46ch',
    year: '2024',
    place: 'Dundee, UK',
    title:
      'The Use of Elliptic Curve Isogenies in Post-Quantum Cryptography: An Analysis of SIDH and CSIDH for Secure Key Exchange',
    overlayTitle:
      'Elliptic Curve Isogenies in Post-Quantum Cryptography — SIDH and CSIDH',
    href: 'static/isogenies-sidh-csidh.pdf',
    bullets: [
      'Led the work on elliptic-curve isogenies and implemented SIDH key exchange in Python with SageMath.',
      'Built a platform simulating quantum attacks on classical cryptography — a 99.8% security reduction for RSA against 0.2% for isogeny-based schemes.',
      'Presented at two university research symposiums; commended by the Department of Cryptography.',
    ],
  },
]

export const roles: Role[] = [
  {
    company: 'OpenWeather',
    role: 'Back-End Developer',
    start: 'May 2024',
    end: '— Present',
    location: 'London, remote',
    bullets: [
      'Led the migration of 85% of core infrastructure from Go to Python, cutting codebase complexity by 40%.',
      'Built high-load forecast services holding sub-200ms responses across 20B+ daily API requests for 250+ enterprise clients.',
      'Researched and shipped a forecast-blending algorithm that improved model accuracy by up to 20%.',
    ],
    summary:
      'High-load forecast APIs for enterprise clients; led the Go → Python migration of core infrastructure and the forecast-blending research behind model accuracy.',
    metrics: [
      { value: '20B+', label: 'Daily API requests' },
      { value: '<200ms', label: 'Response at peak' },
      { value: '+20%', label: 'Forecast accuracy' },
    ],
    stack:
      'Sanic · PostgreSQL · MongoDB · Redis · NumPy · Go · RabbitMQ · Airflow · Celery · Docker',
  },
  {
    company: 'Geniusee — BugsHunter',
    role: 'Back-End Developer',
    start: 'Oct 2025',
    end: '— Present',
    location: 'Kyiv, remote',
    bullets: [
      'Designed an AI QA platform that generates, runs and self-heals Playwright end-to-end tests before bugs reach production.',
      'Drove autonomous browser agents on Amazon Bedrock AgentCore, cutting test-maintenance effort by ~60%.',
      'Orchestrated long-running agent jobs through an event-driven SQS and Lambda pipeline at ~5k jobs a day.',
    ],
    summary:
      'Agentic QA platform: autonomous browser agents that write, run and repair end-to-end tests, streamed live to the user mid-run.',
    metrics: [
      { value: '−60%', label: 'Test maintenance' },
      { value: '5k', label: 'Agent jobs a day' },
      { value: '100', label: 'Concurrent clients' },
    ],
    stack:
      'FastAPI · Bedrock AgentCore · Lambda · ECS · SQS · Redis · PostgreSQL · Playwright · DDD',
  },
  {
    company: 'Geniusee — ProrataAds',
    role: 'Back-End Developer',
    start: 'Apr 2024',
    end: '— Oct 2025',
    location: 'Kyiv, remote',
    bullets: [
      'Built an AI enrichment service for Prorata.ai running thousands of requests daily at 99.8% accuracy.',
      'Accelerated the application by 70% through embedding reuse, cutting compute spend by $25,000 a month.',
      'Designed an ORM-free architecture on raw SQL: 45% faster queries and 60% lower memory across tables.',
    ],
    summary:
      'AI ad-enrichment service for Prorata.ai, built on an ORM-free raw-SQL core with async connection pooling.',
    metrics: [
      { value: '+70%', label: 'Faster application' },
      { value: '$25k', label: 'Monthly compute saved' },
      { value: '99.8%', label: 'Enrichment accuracy' },
    ],
    stack:
      'FastAPI · Django REST · PostgreSQL · NeonDB · Redis · RabbitMQ · Celery · Firecrawl',
  },
  {
    company: 'Gazer Limited',
    role: 'Back-End Developer',
    start: 'Jun 2021',
    end: '— Jan 2024',
    location: 'Kyiv',
    bullets: [
      'Built a price-monitoring system detecting RRP violations across 50+ online stores, recovering an estimated €120,000 a year.',
      'Engineered a pipeline processing 100,000+ rows daily at 99.95% accuracy on AWS EC2.',
      'Integrated the OpenAI API into customer service, resolving 65% of inquiries without human intervention.',
    ],
    summary:
      'Price-intelligence and automation systems for retail brand protection — monitoring, reporting and LLM-assisted customer service.',
    metrics: [
      { value: '€120k', label: 'Revenue recovered a year' },
      { value: '100k+', label: 'Rows processed daily' },
      { value: '−75%', label: 'Manual analysis time' },
    ],
    stack: 'Python · aiogram · FastAPI · ReactJS · OpenAI API · AWS EC2 · Docker',
  },
]

export const projects: Project[] = [
  {
    org: 'OpenWeather',
    kind: 'Product ↗',
    title: 'OneCall 4.0 API',
    description:
      'Forecast API product designed and shipped end to end, including custom Go support modules.',
    metrics: '~20B requests a day · 4×–12× faster endpoints · 250+ enterprise clients',
    href: 'https://openweathermap.org/api',
  },
  {
    org: 'BugsHunter',
    kind: 'Product ↗',
    title: 'Self-healing QA agents',
    description:
      'Playwright tests generated from natural language, repaired automatically when selectors break.',
    metrics: '−60% maintenance · sub-200ms step streaming',
    href: 'https://bugshunter.ai',
  },
  {
    org: 'Prorata.ai',
    kind: 'Product ↗',
    title: 'Embedding enrichment service',
    description:
      'Ad-enrichment pipeline with embedding reuse and raw-SQL access across 15+ tables.',
    metrics: '99.8% accuracy · 45% faster queries',
    href: 'https://prorata.ai',
  },
  {
    org: 'Gazer',
    kind: 'Internal',
    title: 'RRP violation monitor',
    description:
      'Automated price monitoring and reporting across 50+ online stores, with a Telegram query bot.',
    metrics: '€120k recovered a year · 99.95% accuracy',
  },
]

export const stack: StackRow[] = [
  { label: 'Languages', value: 'Python, Go, Rust, C/C++, Java, JavaScript' },
  {
    label: 'ML & research',
    value: 'PyTorch, NumPy, SageMath, deep learning, optimisation, calculus',
  },
  { label: 'Backend', value: 'FastAPI, Sanic, Django REST, Celery, Airflow, Spring' },
  { label: 'Data', value: 'PostgreSQL, MySQL, Redis, MongoDB, ChromaDB, NeonDB' },
  {
    label: 'Infrastructure',
    value:
      'AWS (EC2, S3, RDS, Lambda, ECS, SQS, Bedrock AgentCore), Docker, RabbitMQ, CI/CD',
  },
  {
    label: 'Security & architecture',
    value:
      'Authentication systems, cryptography, post-quantum key exchange, modular monolith, microservices, event-driven, DDD',
  },
]

export const education: Degree[] = [
  {
    degree: 'PhD, Computer Science and Neuroscience',
    institution: 'University of St Andrews',
    period: '2026 — 2030 · Incoming',
  },
  {
    degree: 'MSc Computer Science',
    institution: 'University of Glasgow',
    period: '2025 — 2026',
  },
  {
    degree: 'BSc Cyber Security',
    institution: 'National University “Zaporizhzhia Polytechnic”',
    period: '2021 — 2025',
  },
]
