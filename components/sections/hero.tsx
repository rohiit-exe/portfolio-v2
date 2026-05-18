'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Equalizer } from '@/components/effects/equalizer';
import { Vinyl } from '@/components/effects/vinyl';
import { Magnetic } from '@/components/effects/magnetic';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SITE, SOCIALS } from '@/lib/constants';

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center pt-32 md:pt-24">
      <div className="container-studio relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Left — headline */}
          <div className="relative">
            <motion.div custom={0} variants={reveal} initial="hidden" animate="show" className="mb-6 flex items-center gap-3">
              <Badge variant="accent">
                <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-magenta-400" />
                Available · Q1 2026
              </Badge>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone-400">
                Rec. {SITE.location}
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={reveal}
              initial="hidden"
              animate="show"
              className="text-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-tight"
            >
              <span className="block text-bone-50">Building</span>
              <span className="block text-gradient-warm">high-performance</span>
              <span className="block text-bone-50">interfaces</span>
              <span className="block">
                <span className="text-bone-400">for the </span>
                <span className="text-gradient-amber italic">AI era.</span>
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={reveal}
              initial="hidden"
              animate="show"
              className="mt-7 max-w-xl text-base leading-relaxed text-bone-200/90 md:text-lg"
            >
              Senior Frontend Engineer with <strong className="text-bone-50">4.5+ years</strong> architecting
              React & Next.js systems. I obsess over streaming UIs, frame budgets, and
              shipping interfaces that feel like instruments — not interfaces.
            </motion.p>

            <motion.div
              custom={3}
              variants={reveal}
              initial="hidden"
              animate="show"
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Magnetic strength={0.2}>
                <Button asChild size="lg" variant="default">
                  <Link href="#projects">
                    View selected work
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Button asChild size="lg" variant="outline">
                  <Link href="#contact">Get in touch</Link>
                </Button>
              </Magnetic>
            </motion.div>

            <motion.ul
              custom={4}
              variants={reveal}
              initial="hidden"
              animate="show"
              className="mt-10 flex items-center gap-1 text-xs text-bone-400"
            >
              {[
                { href: SOCIALS.github, label: 'GitHub', Icon: Github },
                { href: SOCIALS.linkedin, label: 'LinkedIn', Icon: Linkedin },
                { href: SOCIALS.email, label: 'Email', Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className="group flex items-center gap-2 rounded-full border border-transparent px-3 py-2 transition-colors hover:border-ink-300 hover:bg-ink-200 hover:text-bone-50"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                    <span className="hidden sm:inline">{label}</span>
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right — "Now Playing" engineering board */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="glass-panel p-6 md:p-7">
              <div className="flex items-center justify-between">
                <span className="cassette-label">SIDE A · 33⅓</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-400">
                  PORTFOLIO ’26
                </span>
              </div>

              <div className="mt-6 flex items-center gap-5">
                <div className="relative w-28 shrink-0 md:w-32">
                  <Vinyl speed={16} label="RN-001" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-magenta-400">
                    Now Playing
                  </p>
                  <p className="mt-1 font-display text-xl leading-tight text-bone-50 md:text-2xl">
                    {SITE.name}
                  </p>
                  <p className="mt-0.5 text-sm text-bone-200/80">{SITE.role}</p>
                </div>
              </div>

              <div className="mt-6 rounded-md border border-ink-300/60 bg-ink-200/30 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-bone-400">
                    Input · Live
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    SIGNAL
                  </span>
                </div>
                <Equalizer bars={36} className="mt-3 h-10" />
              </div>

              <dl className="mt-5 grid grid-cols-3 gap-2 text-center">
                {[
                  { k: 'YEARS', v: '4.5+' },
                  { k: 'APPS', v: '10+' },
                  { k: 'USERS', v: '5k+' },
                ].map(({ k, v }) => (
                  <div key={k} className="rounded-md bg-ink-200/40 px-3 py-2">
                    <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-bone-400">
                      {k}
                    </dt>
                    <dd className="mt-0.5 font-display text-lg text-bone-50">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Soft glow behind */}
            <div className="absolute -inset-10 -z-10 rounded-full bg-magenta-600/10 blur-3xl" />
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.25em] text-bone-400"
        >
          Scroll to side B ↓
        </motion.div>
      </div>
    </section>
  );
}
