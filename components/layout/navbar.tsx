'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { Disc3 } from 'lucide-react';
import { NAV_ITEMS, SITE } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => scrollY.on('change', (v) => setScrolled(v > 24)), [scrollY]);

  // Keyboard shortcut: G then section letter
  useEffect(() => {
    let leader = false;
    let leaderTimer: number | undefined;
    const map: Record<string, string> = {
      a: '#about',
      w: '#experience',
      p: '#projects',
      s: '#skills',
      l: '#playground',
      c: '#contact',
      h: '#hero',
    };
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (['INPUT', 'TEXTAREA'].includes(target.tagName) || target.isContentEditable) return;
      if (e.key.toLowerCase() === 'g' && !leader) {
        leader = true;
        leaderTimer = window.setTimeout(() => (leader = false), 1200);
        return;
      }
      if (leader && map[e.key.toLowerCase()]) {
        e.preventDefault();
        leader = false;
        window.clearTimeout(leaderTimer);
        document.querySelector(map[e.key.toLowerCase()])?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-500',
        scrolled ? 'pt-3' : 'pt-6',
      )}
    >
      <div className="container-studio">
        <div
          className={cn(
            'flex items-center justify-between rounded-full border px-4 py-2 transition-all duration-500',
            scrolled
              ? 'border-ink-300/80 bg-ink-100/70 backdrop-blur-xl shadow-[0_8px_30px_-8px_rgba(0,0,0,0.6)]'
              : 'border-transparent bg-transparent',
          )}
        >
          <Link
            href="#hero"
            className="group flex items-center gap-2 pl-2 pr-3 text-sm font-medium tracking-tight"
          >
            <Disc3
              className="h-5 w-5 text-magenta-400 transition-transform duration-700 ease-studio group-hover:rotate-180"
              strokeWidth={1.5}
              aria-hidden
            />
            <span>{SITE.name}</span>
            <span className="hidden text-bone-400/70 md:inline">— {SITE.role.split(' ').slice(-1)[0]}</span>
          </Link>

          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-1 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-full px-3 py-1.5 text-bone-200 transition-colors duration-300 hover:bg-ink-200 hover:text-bone-50"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-bone-50 px-4 py-1.5 text-xs font-medium text-ink-0 transition-all duration-300 hover:bg-bone-100 hover:shadow-[0_8px_30px_-8px_rgba(245,240,230,0.4)]"
          >
            Hire me
          </a>
        </div>
      </div>
    </motion.header>
  );
}
