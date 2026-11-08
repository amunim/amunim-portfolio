// Facts below come from the owner's version-2 branch (feature/version-2). Numbers are theirs, not verified here.

export type Slide = {
  id: string
  tab: string
  logo: string
  logoClass?: string
  role: string
  title: string
  summary: string
  points: string[]
  stack: string[]
  links: { label: string; href: string }[]
  laptop: { src: string; alt: string }
  flow?: { from: string; to: string; items: string[] }
}

export const slides: Slide[] = [
  {
    id: 'iclosed',
    tab: 'iClosed',
    logo: '/images/iclosed-dark.svg',
    role: 'Software Engineer L2 · 2025 to present',
    title: 'Public API and MCP server for a scheduling platform',
    summary:
      'Built the public API of iClosed: OAuth 2.0, rate limiting, versioned OpenAPI docs and an MCP server, used by thousands of partners and users for secure, agent-native integrations.',
    points: [
      'Device fingerprinting in the booking pipeline: one customer went from thousands of fraudulent bookings, rotating IPs, to zero.',
      'Link previews for every shared event link across 10,000+ events and 1M+ bookings, on AWS CloudFront.',
    ],
    stack: ['TypeScript', 'Node.js', 'React', 'AWS', 'PostgreSQL', 'MongoDB', 'Microservices'],
    links: [
      { label: 'Read the API docs', href: 'https://developer.iclosed.io' },
      { label: 'Visit iClosed', href: 'https://iclosed.io' },
    ],
    laptop: { src: '/showcase/iclosed-d.jpg', alt: 'The iClosed API documentation: introduction, base URLs and a three-step quick start' },
  },
  {
    id: 'cast',
    tab: 'Cast',
    logo: '/images/cast-icon.svg',
    role: 'Founder and full stack engineer · 2025 to present',
    title: 'Turn any API into an agent-ready MCP server',
    summary:
      'Cast turns an OpenAPI spec into a hosted MCP server, with no OAuth or DCR work. I built the spec-to-server pipeline on AWS ECS, the analytics dashboard and the governance layer.',
    points: [
      'Sequence mining finds common tool-call chains and suggests reusable agent SKILL.md workflows.',
      'Per-tool controls, AES-256-GCM secret encryption, Redis rate limiting and custom domains with automated certificates.',
    ],
    stack: ['TypeScript', 'Next.js', 'Node.js', 'Prisma', 'MySQL', 'Redis', 'AWS ECS'],
    links: [
      { label: 'Visit Cast', href: 'https://getcast.io' },
      { label: 'Try the demo', href: 'https://getcast.io/demo' },
    ],
    laptop: { src: '/showcase/cast-d.jpg', alt: 'The Cast website: from your API to a live MCP server in under a minute' },
  },
  {
    id: 'zid',
    tab: 'Zid Sheets',
    logo: '/images/zid-sheets.webp',
    role: 'Independent project · 2024 to present',
    title: 'Zid stores into Google Sheets, in three steps',
    summary:
      'A low-code integration for Zid merchants: connect, map fields, automate. It exports to the workbooks they choose, with column-level mapping, in English and Arabic with right-to-left layout.',
    points: [
      'Manual exports, scheduled jobs and event-driven pushes from one configuration screen, over secure webhooks.',
    ],
    stack: ['TypeScript', 'Next.js', 'Node.js', 'Google APIs', 'Webhooks'],
    links: [
      { label: 'Visit Zid Sheets', href: 'https://zidsheets.amunim.me/' },
      { label: 'See the Zid listing', href: 'https://web.zid.sa/market/app/4774' },
    ],
    laptop: { src: '/showcase/zid-d.png', alt: 'The Zid Sheets dashboard: the Executions page with a log of successful order.create runs and the monthly quota' },
    flow: { from: 'Zid store', to: 'Google Sheets', items: ['Orders', 'Customers', 'Carts', 'Product catalog'] },
  },
  {
    id: 'magical',
    tab: 'Magical Digits',
    logo: '/images/magical-digits.png',
    logoClass: 'h-6 w-auto',
    role: 'Software Engineer L1 · 2021 to 2022',
    title: 'One platform behind every rental brand',
    summary:
      'Replaced separate ASP.NET codebases with a single .NET 6 API and a Next.js front end that serve every brand from one multi-tenant back-end, including Goldener Inns and Crystal Cabins.',
    points: [
      'A SQL Server driven page and routing model removed the per-property release cycle.',
      'Booking and OTA flows moved over at thousands of bookings a day, with p95 checkout latency down about 40%.',
    ],
    stack: ['C#', '.NET 6', 'SQL Server', 'Next.js', 'Node.js'],
    links: [{ label: 'Visit Goldener Inns', href: 'https://goldenerinns.com' }],
    laptop: { src: '/showcase/goldener-d.jpg', alt: 'The Goldener Inns vacation rental website with a search bar over a photograph of a street of cottages' },
  },
]
