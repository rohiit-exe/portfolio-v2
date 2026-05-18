'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/section-heading';
import { AnimatedCounter } from '@/components/shared/animated-counter';
import { metrics } from '@/lib/data/metrics';

export function Performance() {
  return (
    <section id="performance" className="relative py-28 md:py-36">
      <div className="container-studio">
        <SectionHeading
          eyebrow="TRACK 05 · METRICS"
          title={
            <>
              Numbers that <span className="text-gradient-amber">moved.</span>
            </>
          }
          description="Performance wins from production, in plain numbers. Faster, smaller, and used by real people."
          align="center"
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m, i) => (
            <motion.li
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-xl border border-ink-300/60 bg-ink-100/40 p-7 backdrop-blur-md transition-colors hover:border-magenta-600/40 hover:bg-ink-100/60"
            >
              <div className="font-display text-5xl font-medium text-bone-50 md:text-6xl">
                <AnimatedCounter to={m.value} prefix={m.prefix} suffix={m.suffix} />
              </div>
              <p className="mt-3 text-sm font-medium text-magenta-400">{m.label}</p>
              <p className="mt-1 text-xs text-bone-400">{m.caption}</p>

              {/* corner accent */}
              <span className="absolute -bottom-px right-0 h-px w-16 bg-gradient-to-l from-magenta-600 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
