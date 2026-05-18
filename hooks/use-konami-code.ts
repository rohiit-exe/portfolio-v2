'use client';

import { useEffect } from 'react';

const SEQUENCE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

export function useKonamiCode(onTrigger: () => void) {
  useEffect(() => {
    let buffer: string[] = [];
    const handler = (e: KeyboardEvent) => {
      buffer = [...buffer, e.key].slice(-SEQUENCE.length);
      if (SEQUENCE.every((key, i) => buffer[i] === key)) {
        onTrigger();
        buffer = [];
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onTrigger]);
}
