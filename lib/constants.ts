export const SITE = {
  name: 'Rohit Negi',
  role: 'Senior Frontend Engineer',
  description:
    'Senior Frontend Engineer building high-performance, AI-powered interfaces with React, Next.js, and streaming UIs. 4.5+ years architecting scalable frontend systems.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rohitnegi.dev',
  email: 'hello@rohitnegi.dev',
  location: 'India',
} as const;

export const SOCIALS = {
  github: 'https://github.com/rohitnegi',
  linkedin: 'https://linkedin.com/in/rohitnegi',
  x: 'https://x.com/rohitnegi',
  email: 'mailto:hello@rohitnegi.dev',
} as const;

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Playground', href: '#playground' },
  { label: 'Contact', href: '#contact' },
] as const;
