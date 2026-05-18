'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Waveform } from '@/components/effects/waveform';

interface SectionHeadingProps {
  /** "Track 02 — Experience" style left label */
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'mx-auto max-w-2xl text-center',
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn('flex items-center gap-3', align === 'center' && 'justify-center')}
      >
        <span className="cassette-label">{eyebrow}</span>
        <span className="h-px w-12 bg-ink-300" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="mt-5 text-display text-4xl font-medium leading-[1.05] text-bone-50 md:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-2xl text-base leading-relaxed text-bone-200/80 md:text-lg"
        >
          {description}
        </motion.p>
      )}

      <div className="mt-8 max-w-md">
        <Waveform samples={60} amplitude={12} />
      </div>
    </div>
  );
}
