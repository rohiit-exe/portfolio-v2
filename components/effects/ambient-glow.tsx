'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

/**
 * Cinematic ambient layer: layered static studio gradients +
 * a mouse-reactive warm spotlight that follows the cursor with spring smoothing.
 * Falls back to a static gradient when prefers-reduced-motion is set.
 * Pointer-events: none. Sits behind <main>.
 */
export function AmbientGlow() {
  const reduced = usePrefersReducedMotion();

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.25);

  const sx = useSpring(mx, { stiffness: 35, damping: 22, mass: 1.4 });
  const sy = useSpring(my, { stiffness: 35, damping: 22, mass: 1.4 });

  const left = useTransform(sx, (v) => `${v * 100}%`);
  const top = useTransform(sy, (v) => `${v * 100}%`);

  useEffect(() => {
    if (reduced) return;
    const handler = (e: PointerEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('pointermove', handler, { passive: true });
    return () => window.removeEventListener('pointermove', handler);
  }, [mx, my, reduced]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-studio-radial opacity-90" />

      {!reduced && (
        <motion.div
          className="absolute h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            left,
            top,
            background:
              'radial-gradient(circle at center, rgba(168, 85, 247, 0.10), rgba(14, 165, 233, 0.04) 40%, transparent 70%)',
          }}
        />
      )}

      <div className="absolute inset-0">
        <span className="absolute left-[12%] top-[18%] block h-1 w-1 rounded-full bg-magenta-400/40 blur-[1px] animate-glow-pulse" />
        <span className="absolute left-[78%] top-[28%] block h-1 w-1 rounded-full bg-cobalt-400/40 blur-[1px] animate-glow-pulse [animation-delay:1.5s]" />
        <span className="absolute left-[42%] top-[64%] block h-1.5 w-1.5 rounded-full bg-amber-400/30 blur-[2px] animate-glow-pulse [animation-delay:3s]" />
        <span className="absolute left-[88%] top-[78%] block h-1 w-1 rounded-full bg-magenta-400/30 blur-[1px] animate-glow-pulse [animation-delay:0.8s]" />
        <span className="absolute left-[18%] top-[82%] block h-1 w-1 rounded-full bg-bone-50/40 blur-[1px] animate-glow-pulse [animation-delay:2.2s]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-0 to-transparent" />
    </div>
  );
}
