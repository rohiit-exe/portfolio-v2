import { Waveform } from '@/components/effects/waveform';
import { SITE, SOCIALS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="relative border-t border-ink-300/40 py-12">
      <div className="container-studio">
        <div className="mb-8">
          <Waveform samples={120} amplitude={10} still />
        </div>

        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-display text-lg text-bone-50">{SITE.name}</p>
            <p className="mt-1 text-xs text-bone-400">
              {SITE.role} · Engineered with React, Next.js, Framer Motion & GSAP
            </p>
          </div>

          <ul className="flex items-center gap-5 text-xs text-bone-200">
            <li>
              <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="hover:text-bone-50">
                GitHub
              </a>
            </li>
            <li>
              <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="hover:text-bone-50">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={SOCIALS.x} target="_blank" rel="noreferrer" className="hover:text-bone-50">
                X
              </a>
            </li>
            <li>
              <a href={SOCIALS.email} className="hover:text-bone-50">
                Email
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-10 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-bone-400/60">
          © {new Date().getFullYear()} — Side B fades out. Press G + H to rewind.
        </p>
      </div>
    </footer>
  );
}
