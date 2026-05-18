export interface SkillBand {
  channel: string;
  label: string;
  skills: { name: string; level: number /* 0-100 */ }[];
}

export const skillBands: SkillBand[] = [
  {
    channel: 'CH 01',
    label: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 94 },
      { name: 'TypeScript', level: 92 },
      { name: 'Tailwind / CSS', level: 90 },
      { name: 'HTML / a11y', level: 88 },
    ],
  },
  {
    channel: 'CH 02',
    label: 'Architecture',
    skills: [
      { name: 'Component design', level: 92 },
      { name: 'State machines', level: 84 },
      { name: 'Module boundaries', level: 88 },
      { name: 'Design systems', level: 86 },
      { name: 'Monorepo (Turbo)', level: 78 },
    ],
  },
  {
    channel: 'CH 03',
    label: 'Performance',
    skills: [
      { name: 'Bundle analysis', level: 90 },
      { name: 'Virtualization', level: 88 },
      { name: 'Lighthouse / RUM', level: 85 },
      { name: 'Code splitting', level: 90 },
      { name: 'Render profiling', level: 86 },
    ],
  },
  {
    channel: 'CH 04',
    label: 'AI / Streaming',
    skills: [
      { name: 'Streaming UIs', level: 90 },
      { name: 'Tool-call UX', level: 85 },
      { name: 'Vercel AI SDK', level: 84 },
      { name: 'LLM prompt UX', level: 80 },
      { name: 'RSC + Suspense', level: 86 },
    ],
  },
  {
    channel: 'CH 05',
    label: 'Tooling',
    skills: [
      { name: 'Vite / Webpack', level: 84 },
      { name: 'Testing (Vitest)', level: 82 },
      { name: 'Storybook', level: 86 },
      { name: 'Playwright', level: 78 },
      { name: 'GitHub Actions', level: 80 },
    ],
  },
  {
    channel: 'CH 06',
    label: 'Platforms',
    skills: [
      { name: 'Web', level: 95 },
      { name: 'React Native', level: 80 },
      { name: 'Electron', level: 76 },
      { name: 'PWA', level: 84 },
      { name: 'Browser APIs', level: 88 },
    ],
  },
];
