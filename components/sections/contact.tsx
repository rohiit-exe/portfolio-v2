'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Mail, Github, Linkedin, ArrowRight, Send } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Equalizer } from '@/components/effects/equalizer';
import { Magnetic } from '@/components/effects/magnetic';
import { SITE, SOCIALS } from '@/lib/constants';

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    // Replace with your real endpoint (e.g. Resend / Formspree / API route)
    await new Promise((r) => setTimeout(r, 900));

    toast.success('Track received — recording in progress', {
      description: 'I’ll get back within 24 hours, often sooner.',
    });
    (e.target as HTMLFormElement).reset();
    setSubmitting(false);
  };

  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="container-studio">
        <SectionHeading
          eyebrow="TRACK 08 · OUTRO"
          title={
            <>
              Let’s press <span className="text-gradient-warm">the next record.</span>
            </>
          }
          description="Open to senior IC and tech-lead roles building AI-powered products. Always up for a thoughtful conversation."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Left — studio sign-off */}
          <div>
            <GlassCard className="relative overflow-hidden">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">
                  Studio is open · Accepting bookings
                </span>
              </div>

              <h3 className="mt-6 font-display text-3xl text-bone-50 md:text-4xl">
                Send a brief.<br />Get a real reply.
              </h3>
              <p className="mt-4 leading-relaxed text-bone-200/85">
                No bots, no templates. Whether it’s a senior IC role, a freelance build or
                advisory work — drop a note and we’ll find time.
              </p>

              <div className="mt-8 space-y-3">
                <ContactRow
                  icon={Mail}
                  label="Email"
                  value={SITE.email}
                  href={SOCIALS.email}
                />
                <ContactRow icon={Github} label="GitHub" value="@rohitnegi" href={SOCIALS.github} />
                <ContactRow icon={Linkedin} label="LinkedIn" value="rohitnegi" href={SOCIALS.linkedin} />
              </div>

              <div className="mt-8 border-t border-ink-300/60 pt-5">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-400">
                  Live input
                </p>
                <Equalizer bars={28} className="h-10" />
              </div>
            </GlassCard>
          </div>

          {/* Right — form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name">
                  <Input name="name" required placeholder="Your name" />
                </Field>
                <Field label="Email">
                  <Input name="email" type="email" required placeholder="you@studio.com" />
                </Field>
              </div>
              <div className="mt-4">
                <Field label="Company / Role">
                  <Input name="company" placeholder="Optional · what are you building?" />
                </Field>
              </div>
              <div className="mt-4">
                <Field label="Brief">
                  <Textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="The role, the timeline, the vibe. Be honest — I will be."
                  />
                </Field>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-ink-300/60 pt-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-bone-400">
                  Avg. reply · &lt; 24 hours
                </p>
                <Magnetic strength={0.18}>
                  <Button type="submit" disabled={submitting} variant="accent" size="lg">
                    {submitting ? (
                      <>Sending…</>
                    ) : (
                      <>
                        Press send <Send className="h-4 w-4" strokeWidth={1.5} />
                      </>
                    )}
                  </Button>
                </Magnetic>
              </div>
            </GlassCard>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* ----------- helpers ----------- */

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-bone-400">
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className="group flex items-center justify-between rounded-md border border-ink-300/50 bg-ink-200/30 p-3 transition-all duration-300 hover:border-magenta-600/40 hover:bg-ink-200/60"
    >
      <span className="flex items-center gap-3">
        <Icon className="h-4 w-4 text-bone-400 group-hover:text-magenta-400" strokeWidth={1.5} />
        <span className="text-sm text-bone-50">{value}</span>
      </span>
      <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-bone-400 group-hover:text-bone-200">
        {label}
        <ArrowRight
          className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5"
          strokeWidth={1.5}
        />
      </span>
    </a>
  );
}
