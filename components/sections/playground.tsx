'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Square, RotateCcw, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const PROMPTS = [
  'Refactor my virtualized grid to hit a 16ms frame budget.',
  'Build a streaming chat UI with tool-call states.',
  'Cut my Next.js bundle by 40%.',
  'Design a frontend architecture for an AI-first product.',
];

const STREAM_RESPONSES: Record<string, string[]> = {
  [PROMPTS[0]]: [
    'Read', 'ing ', 'profiler ', 'data', '…\n\n',
    'Hot ', 'paths ', 'flagged: ', '`Row.render` ', '(8.4ms), ', '`Cell.measure` ', '(3.1ms).\n\n',
    'Plan:\n',
    '  1. ', 'Memoize ', 'cell ', 'measurement ', 'with ', 'a ', 'WeakMap ', 'keyed ', 'by ', 'row + col.\n',
    '  2. ', 'Promote ', '`row` ', 'to ', 'its ', 'own ', 'compositor ', 'layer ', '(translate3d).\n',
    '  3. ', 'Defer ', 'non-visible ', 'cell ', 'work ', 'to ', 'idleCallback.\n\n',
    'Projected ', 'gain: ', '~8ms ', '→ ', 'comfortably ', 'under ', '16ms ', 'budget. ✓',
  ],
  [PROMPTS[1]]: [
    'Spinning ', 'up ', 'a ', 'streaming ', 'primitive', '…\n\n',
    'Architecture:\n',
    '  • ', '`useChat` ', 'hook ', 'with ', 'an ', 'async ', 'iterator ', 'over ', 'SSE.\n',
    '  • ', 'Tool ', 'calls ', 'rendered ', 'as ', 'their ', 'own ', 'state ', 'machine.\n',
    '  • ', 'Markdown ', 'parsed ', 'incrementally ', '— ', 'no ', 'flash.\n\n',
    'Bonus: ', 'a ', 'tape-loading ', 'bar ', 'so ', 'the ', 'wait ', 'feels ', 'alive. ✓',
  ],
  [PROMPTS[2]]: [
    'Analyzing ', 'bundle', '…\n\n',
    'Biggest ', 'offenders:\n',
    '  – ', 'lodash ', '(28kb) ', '→ ', 'switch ', 'to ', 'native + es-toolkit.\n',
    '  – ', 'date-fns ', '(22kb) ', '→ ', 'tree-shake ', 'import ', 'paths.\n',
    '  – ', 'icon ', 'pack ', '(40kb) ', '→ ', 'dynamic ', 'import ', 'per ', 'route.\n\n',
    'Plus ', 'route-level ', 'splitting ', '+ ', 'RSC ', 'where ', 'safe.\n',
    'Projected ', 'cut: ', '~42%. ✓',
  ],
  [PROMPTS[3]]: [
    'Sketching ', 'an ', 'AI-first ', 'frontend ', 'stack', '…\n\n',
    '  • ', 'Next.js ', 'App ', 'Router ', '+ ', 'RSC ', 'for ', 'streaming ', 'shells.\n',
    '  • ', 'TanStack ', 'Query ', 'for ', 'server ', 'state, ', 'Zustand ', 'for ', 'UI.\n',
    '  • ', 'A ', '`/streaming` ', 'primitives ', 'package ', '— ', 'tool ', 'calls, ', 'partial ', 'markdown, ', 'retries.\n',
    '  • ', 'Observability: ', 'web-vitals ', '+ ', 'OpenTelemetry ', 'spans.\n\n',
    'Outcome: ', 'an ', 'interface ', 'that ', 'feels ', 'like ', 'a ', 'native ', 'app ', 'on ', 'a ', 'streaming ', 'spine. ✓',
  ],
};

export function Playground() {
  return (
    <section id="playground" className="relative py-28 md:py-40">
      <div className="container-studio">
        <SectionHeading
          eyebrow="TRACK 06 · PLAYGROUND"
          title={
            <>
              The <span className="text-gradient-warm">live console.</span>
            </>
          }
          description="A small interactive playground — fake AI stream, real engineering instincts. Press play, pick a prompt, watch the tokens land."
        />

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <StreamingConsole />
          <SignalMeter />
        </div>
      </div>
    </section>
  );
}

/* ----------- Streaming console ----------- */

function StreamingConsole() {
  const [activePrompt, setActivePrompt] = useState<string>(PROMPTS[0]);
  const [output, setOutput] = useState<string>('');
  const [isStreaming, setIsStreaming] = useState(false);
  const stopRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const stream = async (prompt: string) => {
    setOutput('');
    setIsStreaming(true);
    stopRef.current = false;
    const tokens = STREAM_RESPONSES[prompt] ?? ['No ', 'response ', 'available.'];
    for (const tok of tokens) {
      if (stopRef.current) break;
      await new Promise((r) => setTimeout(r, 30 + Math.random() * 50));
      setOutput((s) => s + tok);
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
    setIsStreaming(false);
  };

  const reset = () => {
    stopRef.current = true;
    setOutput('');
    setIsStreaming(false);
  };

  return (
    <GlassCard className="overflow-hidden p-0">
      {/* Window chrome */}
      <header className="flex items-center justify-between border-b border-ink-300/60 bg-ink-200/40 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.15em] text-bone-400">
            studio · stream.tsx
          </span>
        </div>
        <Badge variant={isStreaming ? 'accent' : 'default'}>
          <span
            className={cn(
              'mr-1.5 inline-block h-1.5 w-1.5 rounded-full',
              isStreaming ? 'bg-magenta-400 animate-pulse' : 'bg-bone-400',
            )}
          />
          {isStreaming ? 'STREAMING' : 'IDLE'}
        </Badge>
      </header>

      {/* Prompt selector */}
      <div className="border-b border-ink-300/60 bg-ink-100/40 p-4">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-bone-400">
          Select a track to play
        </p>
        <div className="flex flex-wrap gap-2">
          {PROMPTS.map((p) => (
            <button
              key={p}
              onClick={() => setActivePrompt(p)}
              className={cn(
                'rounded-full border px-3 py-1.5 text-xs transition-all duration-300',
                activePrompt === p
                  ? 'border-magenta-600 bg-magenta-600/10 text-magenta-300'
                  : 'border-ink-300 text-bone-200 hover:border-ink-400 hover:bg-ink-200',
              )}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Output */}
      <div
        ref={scrollRef}
        className="relative h-72 overflow-y-auto bg-ink-50/60 p-5 font-mono text-sm leading-relaxed text-bone-100"
        aria-live="polite"
        aria-atomic="false"
      >
        <div className="mb-2 text-bone-400">
          <span className="text-cobalt-300">$</span> studio --prompt "{activePrompt}"
        </div>
        <pre className="whitespace-pre-wrap break-words font-mono">
          {output}
          {isStreaming && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, repeatType: 'reverse' }}
              className="ml-1 inline-block h-4 w-2 -translate-y-[2px] bg-magenta-400"
              aria-hidden
            />
          )}
        </pre>
        {!output && !isStreaming && (
          <p className="mt-12 text-center text-bone-400">
            <Sparkles className="mx-auto mb-2 h-5 w-5 text-magenta-400" strokeWidth={1.5} />
            Press play to stream the response.
          </p>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between gap-3 border-t border-ink-300/60 bg-ink-200/40 px-4 py-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-bone-400">
          Demo only · simulated SSE
        </p>
        <div className="flex items-center gap-2">
          {isStreaming ? (
            <Button size="sm" variant="outline" onClick={() => (stopRef.current = true)}>
              <Square className="h-3.5 w-3.5" strokeWidth={1.5} />
              Stop
            </Button>
          ) : (
            <Button size="sm" variant="accent" onClick={() => stream(activePrompt)}>
              <Play className="h-3.5 w-3.5" strokeWidth={1.5} />
              Play
            </Button>
          )}
          <Button size="sm" variant="ghost" onClick={reset} aria-label="Reset console">
            <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Button>
        </div>
      </div>
    </GlassCard>
  );
}

/* ----------- Signal meter (mouse-reactive bar grid) ----------- */

function SignalMeter() {
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: PointerEvent) => {
      const el = cardRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      setPos({ x, y });
    };
    const card = cardRef.current;
    card?.addEventListener('pointermove', handler);
    return () => card?.removeEventListener('pointermove', handler);
  }, []);

  const cols = 14;
  const rows = 8;

  return (
    <GlassCard className="relative" ref={cardRef} hover>
      <header className="mb-4 flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-400">
          Signal meter
        </p>
        <Badge variant="cool">LIVE · {Math.round(pos.x * 100)}/{Math.round(pos.y * 100)}</Badge>
      </header>

      <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {Array.from({ length: cols * rows }).map((_, i) => {
          const cx = (i % cols) / (cols - 1);
          const cy = Math.floor(i / cols) / (rows - 1);
          const dx = cx - pos.x;
          const dy = cy - pos.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          const intensity = Math.max(0, 1 - d * 2.2);
          return (
            <span
              key={i}
              className="aspect-square rounded-sm"
              style={{
                background: `rgba(199, 125, 255, ${0.06 + intensity * 0.85})`,
                transform: `scale(${0.7 + intensity * 0.45})`,
                transition: 'transform 200ms cubic-bezier(0.22,1,0.36,1)',
              }}
              aria-hidden
            />
          );
        })}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-bone-200/80">
        A reactive pixel grid responding to your pointer — a tiny taste of the kind of
        moment-to-moment polish I obsess over.
      </p>
    </GlassCard>
  );
}
