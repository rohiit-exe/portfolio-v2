export interface Project {
  id: string;
  catalog: string; // e.g. "RN-001"
  title: string;
  tagline: string;
  description: string;
  year: string;
  runtime: string; // playful "duration"
  genre: string;   // category
  cover: {
    from: string;  // tailwind gradient stops
    via: string;
    to: string;
  };
  metrics: { label: string; value: string }[];
  stack: string[];
  highlights: string[];
  links: { github?: string; live?: string };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'trackwick',
    catalog: 'RN-001',
    title: 'Trackwick',
    tagline: 'Enterprise dashboards, virtualized at 100k+ rows',
    description:
      'Operations dashboard suite — virtualized grids, faceted filters, real-time sync. Architected the rendering pipeline to hit a 16ms frame budget across hot interactions.',
    year: '2024',
    runtime: '04:18',
    genre: 'Enterprise SaaS',
    cover: { from: 'from-magenta-600/40', via: 'via-cobalt-500/20', to: 'to-amber-500/10' },
    metrics: [
      { label: 'Rows handled', value: '100k+' },
      { label: 'Lighthouse', value: '94' },
      { label: 'TTI', value: '1.8s' },
    ],
    stack: ['Next.js', 'TanStack Table', 'TanStack Query', 'Zustand', 'TS', 'Tailwind'],
    highlights: [
      'Custom windowing layer combining row + column virtualization',
      'Optimistic mutations with rollback choreography',
      'Sub-16ms scroll across mid-range hardware',
    ],
    links: { live: 'https://trackolap.com' },
    featured: true,
  },
  {
    id: 'codesnippets',
    catalog: 'RN-002',
    title: 'CodeSnippets.ai',
    tagline: 'Collaborative coding with streaming AI',
    description:
      'A multiplayer code workspace with streaming LLM responses, tool-call visualization, and an editor that feels native at any document length.',
    year: '2023',
    runtime: '03:42',
    genre: 'AI / Developer Tools',
    cover: { from: 'from-cobalt-500/40', via: 'via-magenta-600/20', to: 'to-ink-200' },
    metrics: [
      { label: 'Streaming', value: 'Token-level' },
      { label: 'Bundle ↓', value: '45%' },
      { label: 'Users', value: '5k+' },
    ],
    stack: ['Next.js', 'Monaco', 'WebSocket', 'TanStack Query', 'Tailwind'],
    highlights: [
      'Streaming chat with tool-call state machine',
      'Live presence + cursor CRDT over WebSocket',
      'Route-level code splitting cut bundle ~45%',
    ],
    links: { live: 'https://codesnippets.ai' },
    featured: true,
  },
  {
    id: 'studio-os',
    catalog: 'RN-003',
    title: 'Studio OS',
    tagline: 'Design-system & motion lab',
    description:
      'Internal motion + token library — used to ship 10+ apps with consistent feel. Houses the primitives that power every interaction shipped on the platform.',
    year: '2024',
    runtime: '02:55',
    genre: 'Design System',
    cover: { from: 'from-amber-500/30', via: 'via-magenta-600/20', to: 'to-ink-200' },
    metrics: [
      { label: 'Apps powered', value: '10+' },
      { label: 'Components', value: '120' },
      { label: 'A11y', value: 'WCAG AA' },
    ],
    stack: ['React', 'Framer Motion', 'Radix', 'Storybook', 'CSS variables'],
    highlights: [
      'Cross-platform tokens (web, desktop, mobile)',
      'Choreography primitives built on Framer Motion',
      'Accessibility audited per primitive',
    ],
    links: {},
  },
  {
    id: 'streaming-ui-kit',
    catalog: 'RN-004',
    title: 'Streaming UI Kit',
    tagline: 'Primitives for token-by-token interfaces',
    description:
      'Open-source primitives for streaming LLM responses — tool-call timeline, partial markdown renderer, retry/cancel choreography.',
    year: '2025',
    runtime: '01:24',
    genre: 'Open Source',
    cover: { from: 'from-magenta-600/30', via: 'via-cobalt-500/20', to: 'to-rose-500/10' },
    metrics: [
      { label: 'Stars', value: '1.2k' },
      { label: 'Size', value: '8kb gz' },
      { label: 'Forks', value: '74' },
    ],
    stack: ['TypeScript', 'React', 'Vitest'],
    highlights: [
      'Zero-dep streaming markdown parser',
      'Composable tool-call timeline',
      'SSR-safe; works in RSC',
    ],
    links: { github: 'https://github.com/rohitnegi/streaming-ui-kit' },
  },
];
