'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Equalizer } from '@/components/effects/equalizer';

const NOW_PLAYING_TRACKS = [
  { title: 'Streaming UI Sessions, Vol. 3', side: 'Side A · Track 04' },
  { title: 'Architecture at 60fps', side: 'Side B · Track 02' },
  { title: 'Bundle Diet Boogie', side: 'Side A · Track 01' },
  { title: 'Late-Night Refactor', side: 'Side B · Track 05' },
];

export function NowPlaying() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const show = window.setTimeout(() => setOpen(true), 2000);
    const rotate = window.setInterval(
      () => setIdx((i) => (i + 1) % NOW_PLAYING_TRACKS.length),
      9000,
    );
    return () => {
      window.clearTimeout(show);
      window.clearInterval(rotate);
    };
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 z-40 hidden md:block"
        >
          <div className="glass-panel flex items-center gap-3 rounded-full pl-2 pr-5 py-2 text-xs">
            <Equalizer bars={6} className="h-7" />

            <div className="flex items-center gap-2 border-l border-ink-300 pl-3">
              <span className="cassette-label !text-[8px]">NOW PLAYING</span>
              <div className="flex flex-col leading-tight">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={NOW_PLAYING_TRACKS[idx].title}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="font-medium text-bone-50"
                  >
                    {NOW_PLAYING_TRACKS[idx].title}
                  </motion.span>
                </AnimatePresence>
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-bone-400">
                  {NOW_PLAYING_TRACKS[idx].side}
                </span>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-1 text-bone-400 hover:text-bone-50"
              aria-label="Dismiss now-playing"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
