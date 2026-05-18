'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

/**
 * Two-layer cursor: a small bone-colored dot and a larger trailing ring
 * that lags behind with spring physics. Hidden on touch / coarse pointers.
 */
export function CursorTrail() {
  const reduced = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);

  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);

  const rx = useSpring(cx, { stiffness: 180, damping: 22, mass: 0.6 });
  const ry = useSpring(cy, { stiffness: 180, damping: 22, mass: 0.6 });

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setEnabled(mq.matches && !reduced);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;
    const handler = (e: PointerEvent) => {
      cx.set(e.clientX);
      cy.set(e.clientY);
    };
    window.addEventListener('pointermove', handler, { passive: true });
    return () => window.removeEventListener('pointermove', handler);
  }, [cx, cy, enabled]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[60] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bone-50 mix-blend-difference"
        style={{ x: cx, y: cy }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[59] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-magenta-400/40"
        style={{ x: rx, y: ry }}
        aria-hidden
      />
    </>
  );
}
