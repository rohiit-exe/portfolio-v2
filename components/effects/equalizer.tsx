'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { cn } from '@/lib/utils';

interface EqualizerProps {
  bars?: number;
  className?: string;
  /** Pause animation when not in view to save frames */
  paused?: boolean;
}

/**
 * Pure transform-based equalizer. Each bar gets its own keyframed scaleY
 * with deterministic seeded offsets so it looks organic without random()
 * re-runs (avoids hydration mismatch).
 */
export function Equalizer({ bars = 28, className, paused = false }: EqualizerProps) {
  const reduced = usePrefersReducedMotion();

  const config = useMemo(
    () =>
      Array.from({ length: bars }).map((_, i) => {
        // deterministic pseudo-random — same SSR/client
        const seed = (i * 9301 + 49297) % 233280;
        const r = seed / 233280;
        return {
          delay: -r * 1.4,
          duration: 0.9 + r * 0.8,
          maxScale: 0.5 + r * 0.5,
        };
      }),
    [bars],
  );

  return (
    <div
      className={cn('flex h-12 items-end gap-[3px]', className)}
      role="img"
      aria-label="Audio equalizer visual"
    >
      {config.map((c, i) => (
        <motion.span
          key={i}
          className="block w-[3px] origin-bottom rounded-sm bg-gradient-to-t from-magenta-600 via-cobalt-400 to-bone-50"
          initial={{ scaleY: 0.2 }}
          animate={
            reduced || paused
              ? { scaleY: c.maxScale * 0.6 }
              : { scaleY: [0.2, c.maxScale, 0.3, c.maxScale * 0.8, 0.2] }
          }
          transition={
            reduced || paused
              ? { duration: 0 }
              : {
                  duration: c.duration,
                  delay: c.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
          style={{ height: '100%' }}
        />
      ))}
    </div>
  );
}
