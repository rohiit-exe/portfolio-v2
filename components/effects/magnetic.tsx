'use client';

import { motion, useMotionValue, useSpring, type HTMLMotionProps } from 'framer-motion';
import { forwardRef, useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { cn } from '@/lib/utils';

interface MagneticProps
  extends Omit<HTMLMotionProps<'div'>, 'onPointerMove' | 'onPointerLeave'> {
  strength?: number;
  as?: 'div' | 'span';
}

/**
 * Wrap any clickable in this to get an elegant pull-toward-cursor effect.
 * Spring-smoothed, GPU-only translate, disabled for reduced-motion.
 */
export const Magnetic = forwardRef<HTMLDivElement, MagneticProps>(function Magnetic(
  { children, strength = 0.25, className, as: _as, style, ...rest },
  forwardedRef,
) {
  const reduced = usePrefersReducedMotion();
  const inner = useRef<HTMLDivElement>(null);
  const tx = useMotionValue(0);
  const ty = useMotionValue(0);
  const sx = useSpring(tx, { stiffness: 220, damping: 18 });
  const sy = useSpring(ty, { stiffness: 220, damping: 18 });

  const onMove = (e: React.PointerEvent) => {
    if (reduced || !inner.current) return;
    const rect = inner.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    tx.set((e.clientX - cx) * strength);
    ty.set((e.clientY - cy) * strength);
  };

  const onLeave = () => {
    tx.set(0);
    ty.set(0);
  };

  return (
    <motion.div
      ref={(node) => {
        inner.current = node;
        if (typeof forwardedRef === 'function') forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
      }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ ...style, x: sx, y: sy }}
      className={cn('inline-block', className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
});
