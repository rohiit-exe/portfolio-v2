'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight, PlayCircle } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { GlassCard } from '@/components/shared/glass-card';
import { Badge } from '@/components/ui/badge';
import { Equalizer } from '@/components/effects/equalizer';
import { projects, type Project } from '@/lib/data/projects';
import { cn } from '@/lib/utils';

export function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-40">
      <div className="container-studio">
        <SectionHeading
          eyebrow="TRACK 03 · RELEASES"
          title={
            <>
              Featured <span className="text-gradient-warm">releases</span>
            </>
          }
          description="Selected projects — each one a small album of decisions about architecture, performance and feel."
        />

        <ul className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.li
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <GlassCard
        hover
        className="group relative h-full overflow-hidden p-0"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Cover art */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <div
            className={cn(
              'absolute inset-0 bg-gradient-to-br',
              project.cover.from,
              project.cover.via,
              project.cover.to,
            )}
          />
          {/* concentric vinyl rings — subtle */}
          <div className="absolute inset-0 mix-blend-overlay opacity-50 vinyl-disc" />
          <div className="absolute inset-0 bg-noise opacity-[0.07]" />

          {/* Catalog tag */}
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="cassette-label !text-[9px]">{project.catalog}</span>
            <Badge variant="default">{project.genre}</Badge>
          </div>

          {/* Runtime */}
          <div className="absolute right-4 top-4 font-mono text-[10px] text-bone-50/80">
            {project.runtime}
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-200/70">
              {project.year} · {project.tagline}
            </p>
            <h3 className="mt-1 font-display text-3xl text-bone-50 md:text-4xl">
              {project.title}
            </h3>
          </div>

          {/* Hover equalizer */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <Equalizer bars={12} className="h-12" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Liner notes */}
        <div className="p-6">
          <p className="text-sm leading-relaxed text-bone-200/85">{project.description}</p>

          {/* Metrics */}
          <dl className="mt-5 grid grid-cols-3 gap-2">
            {project.metrics.map((m) => (
              <div key={m.label} className="rounded-md border border-ink-300/50 bg-ink-200/30 px-3 py-2">
                <dt className="font-mono text-[9px] uppercase tracking-[0.15em] text-bone-400">
                  {m.label}
                </dt>
                <dd className="mt-0.5 font-display text-base text-bone-50">{m.value}</dd>
              </div>
            ))}
          </dl>

          {/* Stack */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 5).map((s) => (
              <Badge key={s} variant="default">
                {s}
              </Badge>
            ))}
            {project.stack.length > 5 && (
              <Badge variant="default">+{project.stack.length - 5}</Badge>
            )}
          </div>

          {/* Links */}
          <div className="mt-5 flex items-center gap-3 border-t border-ink-300/50 pt-4">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-xs text-bone-200 transition-colors hover:text-bone-50"
              >
                <PlayCircle className="h-4 w-4" strokeWidth={1.5} />
                Live
                <ArrowUpRight
                  className="h-3 w-3 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-xs text-bone-200 transition-colors hover:text-bone-50"
              >
                <Github className="h-4 w-4" strokeWidth={1.5} />
                Source
                <ArrowUpRight
                  className="h-3 w-3 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </a>
            )}
            {project.featured && (
              <span className="ml-auto cassette-label !text-[8px]">FEATURED</span>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.li>
  );
}
