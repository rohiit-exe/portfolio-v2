export interface ExperienceTrack {
  id: string;
  side: 'A' | 'B';
  trackNo: string;
  company: string;
  role: string;
  duration: string;
  period: string;
  bpm: string; // playful — "team velocity"
  summary: string;
  highlights: string[];
  stack: string[];
}

export const experience: ExperienceTrack[] = [
  {
    id: 'trackolap',
    side: 'A',
    trackNo: '01',
    company: 'Trackolap',
    role: 'Senior Frontend Engineer',
    duration: '2:14',
    period: '2023 — Present',
    bpm: '128',
    summary:
      'Lead frontend architecture for enterprise SaaS dashboards used by 5k+ active users across web, desktop, and mobile. Own performance, design system, and AI-feature delivery.',
    highlights: [
      'Architected a virtualized grid handling 100k+ records with sub-16ms scroll frame budgets',
      'Lifted Lighthouse performance from 60 to 90+ across primary surfaces',
      'Shipped 10+ production apps on a shared Next.js + React Native architecture',
      'Mentored 4 junior engineers; ran weekly frontend craft reviews',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Zustand', 'React Native', 'Electron'],
  },
  {
    id: 'codesnippets',
    side: 'A',
    trackNo: '02',
    company: 'CodeSnippets.ai',
    role: 'Frontend Engineer (Contract)',
    duration: '1:48',
    period: '2022 — 2023',
    bpm: '140',
    summary:
      'Built AI-powered collaborative coding workspace — real-time editor, streaming LLM responses, multi-user presence, snippet sharing graph.',
    highlights: [
      'Designed streaming chat UI with token-by-token rendering and graceful tool-call states',
      'Reduced bundle size by ~45% through route-level code splitting and dynamic imports',
      'Implemented presence and CRDT cursors over WebSocket',
    ],
    stack: ['Next.js', 'React', 'Monaco', 'TanStack Query', 'WebSocket', 'Tailwind'],
  },
  {
    id: 'earlier',
    side: 'B',
    trackNo: '03',
    company: 'Earlier roles',
    role: 'Frontend Engineer',
    duration: '3:02',
    period: '2020 — 2022',
    bpm: '110',
    summary:
      'Foundational years — shipped product UIs across e-commerce, fintech and internal tooling. Earned the obsession with motion, performance and clean DX.',
    highlights: [
      'Built 12+ production features across React + Vue codebases',
      'Introduced Storybook + design tokens, cutting visual regressions by 60%',
      'First exposure to streaming, observability and CI-gated performance budgets',
    ],
    stack: ['React', 'Vue', 'Redux', 'Webpack', 'Storybook', 'Cypress'],
  },
];
