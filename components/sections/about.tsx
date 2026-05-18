'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/section-heading';
import { GlassCard } from '@/components/shared/glass-card';

const studioCards = [
  {
    label: 'Channel 01',
    title: 'Interfaces as instruments',
    body: 'I treat the UI like a console — every control deliberate, every motion meaningful. The user should feel like they’re playing an instrument, not navigating a form.',
  },
  {
    label: 'Channel 02',
    title: 'Performance is design',
    body: 'A 60fps interaction *is* the design. I bring the same care to frame budgets, bundle weight and TTI as I do to spacing and color.',
  },
  {
    label: 'Channel 03',
    title: 'Architecture that scales',
    body: 'I think in module boundaries, state machines and rendering layers. Code I ship today should still feel calm in two years.',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="container-studio relative">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="TRACK 01 · ABOUT"
              title={
                <>
                  An engineer<br />from a <span className="text-gradient-warm">late-night studio.</span>
                </>
              }
            />

            <div className="space-y-5 text-bone-200/85 leading-relaxed">
              <p>
                I’ve been quietly obsessed with interfaces since the first time I made a button
                feel <em>right</em>. Over the past 4.5 years I’ve shipped 10+ production apps —
                enterprise dashboards, AI-powered editors, cross-platform tools — and led the
                frontend architecture behind them.
              </p>
              <p>
                Most of my best work happens after 11pm, when the office goes quiet and
                everything that’s left is the problem and the cursor. That’s the energy I’ve
                tried to bottle here.
              </p>
              <p className="font-mono text-sm text-bone-400">
                $ whoami<br />
                <span className="text-bone-50">→ senior frontend engineer · react · next · streaming UIs</span>
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {studioCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <GlassCard hover className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-ink-300 bg-ink-200/60 font-mono text-[10px] uppercase tracking-[0.15em] text-bone-400">
                      {card.label.split(' ')[1]}
                    </div>
                    <div className="flex-1">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-400">
                        {card.label}
                      </p>
                      <h3 className="mt-1 font-display text-xl text-bone-50">{card.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-bone-200/80">{card.body}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
