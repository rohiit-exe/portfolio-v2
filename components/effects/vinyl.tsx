'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface VinylProps {
  className?: string;
  /** Speed in seconds per rotation. Higher = slower. */
  speed?: number;
  /** Label color */
  labelColor?: string;
  /** Optional center label text */
  label?: string;
}

export function Vinyl({
  className,
  speed = 14,
  labelColor = 'bg-magenta-600',
  label,
}: VinylProps) {
  return (
    <motion.div
      className={cn(
        'vinyl-disc relative aspect-square w-full rounded-full shadow-[0_30px_80px_-30px_rgba(168,85,247,0.6),inset_0_0_0_1px_rgba(255,255,255,0.04)]',
        className,
      )}
      animate={{ rotate: 360 }}
      transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      aria-hidden
    >
      <div className={cn('absolute inset-[34%] rounded-full', labelColor)}>
        {label && (
          <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.2em] text-bone-50">
            {label}
          </span>
        )}
      </div>
      <div className="absolute inset-[46%] rounded-full bg-ink-0" />
      <div className="absolute inset-[48%] rounded-full bg-bone-50/30" />
    </motion.div>
  );
}
