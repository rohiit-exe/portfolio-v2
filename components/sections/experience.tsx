'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/section-heading';
import { GlassCard } from '@/components/shared/glass-card';
import { Badge } from '@/components/ui/badge';
import { Vinyl } from '@/components/effects/vinyl';
import { experience } from '@/lib/data/experience';

export function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-40">
      <div className="container-studio">
        <SectionHeading
          eyebrow="TRACK 02 · TRACKLIST"
          title={
            <>
              Studio sessions — <span className="text-gradient-warm">past & present</span>
            </>
          }
          description="A working tracklist of roles, projects and what got pressed onto each side. Every line item earned its slot."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          {/* Vinyl record visual — sticky on lg */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="relative mx-auto max-w-[280px]">
              <Vinyl speed={20} label="NEGI · 2026" />
              <div className="absolute -inset-6 -z-10 rounded-full bg-cobalt-500/10 blur-3xl" />
            </div>
            <div className="mt-6 rounded-md border border-ink-300/60 bg-ink-200/30 p-4 text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-400">
                CATALOG
              </p>
              <p className="mt-1 font-display text-lg text-bone-50">RN-LP-01</p>
              <p className="mt-0.5 text-xs text-bone-400">Side A & B · {experience.length} tracks</p>
            </div>
          </div>

          {/* Tracklist */}
          <ol className="space-y-6">
            {experience.map((track, i) => (
              <motion.li
                key={track.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <GlassCard hover>
                  <header className="flex flex-wrap items-baseline justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-bone-400">
                        SIDE {track.side} · {track.trackNo}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-bone-400" />
                      <Badge variant={track.side === 'A' ? 'accent' : 'cool'}>{track.bpm} BPM</Badge>
                    </div>
                    <time className="font-mono text-xs text-bone-400">{track.period}</time>
                  </header>

                  <h3 className="mt-3 font-display text-2xl text-bone-50 md:text-3xl">
                    {track.role}
                    <span className="ml-3 text-base font-normal text-bone-400">@ {track.company}</span>
                  </h3>

                  <p className="mt-3 leading-relaxed text-bone-200/85">{track.summary}</p>

                  <ul className="mt-5 space-y-2">
                    {track.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-bone-200/90"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-magenta-400" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {track.stack.map((s) => (
                      <Badge key={s} variant="default">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </GlassCard>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
