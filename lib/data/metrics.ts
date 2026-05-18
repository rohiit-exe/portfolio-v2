export interface Metric {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  caption: string;
}

export const metrics: Metric[] = [
  {
    value: 36,
    suffix: '%',
    label: 'Faster rendering',
    caption: 'Across virtualized enterprise grids',
  },
  {
    value: 45,
    suffix: '%',
    label: 'Smaller bundles',
    caption: 'Route-level splitting + dynamic imports',
  },
  {
    value: 90,
    suffix: '+',
    label: 'Lighthouse perf',
    caption: 'Lifted from 60 across primary surfaces',
  },
  {
    value: 5,
    suffix: 'k+',
    label: 'Active users',
    caption: 'Reliant on apps I build & maintain',
  },
  {
    value: 10,
    suffix: '+',
    label: 'Production apps',
    caption: 'Web, desktop & mobile shipped',
  },
  {
    value: 4,
    suffix: '+',
    label: 'Engineers mentored',
    caption: 'Through weekly frontend craft reviews',
  },
];
