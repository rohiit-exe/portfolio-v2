'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'sonner';
import { useKonamiCode } from '@/hooks/use-konami-code';

/**
 * Easter egg: enter ↑ ↑ ↓ ↓ ← → ← → B A
 * → a giant vinyl spins in from the side, side-A label shows
 * "Now playing — secret track", auto-dismisses after 6s.
 */
export function KonamiListener() {
  const [open, setOpen] = useState(false);

  useKonamiCode(() => {
    setOpen(true);
    toast('🎛  Side B unlocked — secret track playing', {
      description: 'Spin the disc by hovering.',
    });
    window.setTimeout(() => setOpen(false), 6000);
  });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ type: 'spring', stiffness: 100, damping: 18 }}
          className="pointer-events-none fixed bottom-12 right-12 z-[70] flex h-56 w-56 items-center justify-center"
          aria-hidden
        >
          <div className="vinyl-disc relative h-full w-full animate-spin-slow rounded-full shadow-[0_30px_80px_-20px_rgba(168,85,247,0.5)]">
            <div className="absolute inset-1/4 rounded-full bg-magenta-600/90" />
            <div className="absolute inset-[35%] rounded-full bg-ink-0" />
            <div className="absolute inset-[44%] rounded-full bg-bone-50/40" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
