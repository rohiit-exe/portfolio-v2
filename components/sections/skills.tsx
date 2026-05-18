'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeading } from '@/components/shared/section-heading';
import { GlassCard } from '@/components/shared/glass-card';
import { skillBands, type SkillBand } from '@/lib/data/skills';

export function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-40">
      <div className="container-studio">
        <SectionHeading
          eyebrow="TRACK 04 · MIXING BOARD"
          title={
            <>
              Channels on the <span className="text-gradient-warm">console</span>
            </>
          }
          description="A mixing board, not a checklist. Six channels — each tuned to a different facet of the work."
        />

        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillBands.map((band, i) => (
            <Channel key={band.channel} band={band} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function Channel({ band, index }: { band: SkillBand; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <GlassCard hover className="h-full">
        <header className="flex items-center justify-between border-b border-ink-300/60 pb-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-400">
            {band.channel}
          </span>
          <h3 className="font-display text-lg text-bone-50">{band.label}</h3>
        </header>

        <ul className="mt-5 space-y-4">
          {band.skills.map((s, j) => (
            <li key={s.name}>
              <div className="flex items-baseline justify-between text-sm">
                <span className="text-bone-50">{s.name}</span>
                <span className="font-mono text-[10px] tabular-nums text-bone-400">
                  {s.level}
                </span>
              </div>
              {/* Slider track */}
              <div
                className="relative mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink-300"
                role="progressbar"
                aria-valuenow={s.level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${s.name} level`}
              >
                <motion.span
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-magenta-600 via-cobalt-400 to-bone-50"
                  initial={{ width: '0%' }}
                  animate={inView ? { width: `${s.level}%` } : undefined}
                  transition={{
                    duration: 1.1,
                    delay: 0.25 + j * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
                {/* Tick marks every 10% — vintage console look */}
                <span
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(90deg, transparent 0 9.5%, rgba(245,240,230,0.4) 9.5% 10%)',
                  }}
                  aria-hidden
                />
              </div>
            </li>
          ))}
        </ul>
      </GlassCard>
    </motion.li>
  );
}
