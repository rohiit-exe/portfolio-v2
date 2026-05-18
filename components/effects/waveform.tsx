'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { cn } from '@/lib/utils';

interface WaveformProps {
  className?: string;
  /** number of sample points */
  samples?: number;
  amplitude?: number;
  /** Static visual? (no animation) */
  still?: boolean;
}

/**
 * Audio-waveform inspired divider. Renders a vertical bar chart along the X axis.
 * Deterministic — seeded by index so it's SSR-stable.
 */
export function Waveform({
  className,
  samples = 80,
  amplitude = 18,
  still = false,
}: WaveformProps) {
  const points = useMemo(
    () =>
      Array.from({ length: samples }).map((_, i) => {
        const s1 = Math.sin((i / samples) * Math.PI * 6);
        const s2 = Math.sin((i / samples) * Math.PI * 14) * 0.4;
        const s3 = Math.sin((i / samples) * Math.PI * 22) * 0.2;
        return Math.abs((s1 + s2 + s3) / 1.6) * amplitude + 1;
      }),
    [samples, amplitude],
  );

  return (
    <div
      className={cn('flex h-10 w-full items-center justify-between gap-[2px] opacity-70', className)}
      role="img"
      aria-label="Decorative audio waveform"
    >
      {points.map((h, i) => (
        <motion.span
          key={i}
          className="block w-[2px] rounded-sm bg-bone-50/40"
          style={{ height: `${h}px` }}
          initial={still ? false : { opacity: 0.3 }}
          animate={still ? undefined : { opacity: [0.3, 0.8, 0.3] }}
          transition={
            still
              ? undefined
              : {
                  duration: 2.4,
                  delay: (i / samples) * 1.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
        />
      ))}
    </div>
  );
}
