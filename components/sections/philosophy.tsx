'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/section-heading';

const pillars = [
  {
    number: '01',
    title: 'Mentorship as multiplication',
    body: 'I review with intent — every PR is a chance to lift the team’s baseline. Weekly craft sessions, paired refactors, written design docs that outlast me.',
  },
  {
    number: '02',
    title: 'Architecture before features',
    body: 'I’d rather spend a day on the right boundary than a month on the wrong one. Clean module seams compound — they’re what lets the team ship fast next quarter.',
  },
  {
    number: '03',
    title: 'Product is the point',
    body: 'Engineering exists to serve people using the thing. I care about what the user feels — that’s what makes a button worth shipping.',
  },
  {
    number: '04',
    title: 'Performance is empathy',
    body: 'Every 100ms saved is a small kindness to someone on a 3-year-old laptop in a coffee shop. Frame budgets are a moral budget.',
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="relative py-28 md:py-40">
      <div className="container-studio">
        <SectionHeading
          eyebrow="TRACK 07 · PRODUCTION NOTES"
          title={
            <>
              How I run a <span className="text-gradient-warm">session.</span>
            </>
          }
          description="The notes I’d leave taped to the studio wall — the four things I want every engineer who works with me to absorb."
        />

        <ol className="grid gap-8 md:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.li
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-5xl text-magenta-600/40 transition-colors duration-500 group-hover:text-magenta-500/80 md:text-6xl">
                  {p.number}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-ink-300 to-transparent" />
              </div>

              <h3 className="mt-3 font-display text-2xl text-bone-50 md:text-3xl">{p.title}</h3>
              <p className="mt-3 max-w-md leading-relaxed text-bone-200/85">{p.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
