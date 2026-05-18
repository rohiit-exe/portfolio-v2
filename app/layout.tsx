import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Toaster } from 'sonner';
import { Navbar } from '@/components/layout/navbar';
import { NowPlaying } from '@/components/layout/now-playing';
import { FilmGrain } from '@/components/effects/film-grain';
import { AmbientGlow } from '@/components/effects/ambient-glow';
import { CursorTrail } from '@/components/effects/cursor-trail';
import { KonamiListener } from '@/components/effects/konami-listener';
import { ScrollProgress } from '@/components/effects/scroll-progress';
import { SITE } from '@/lib/constants';
import './globals.css';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0B0A10',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.role}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'Senior Frontend Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'AI-powered products',
    'Streaming UI',
    'Frontend Architecture',
    'Performance Optimization',
    'Rohit Negi',
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.description,
    creator: '@rohitnegi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="relative min-h-screen overflow-x-hidden">
        {/* Ambient layers — purely decorative, pointer-events none */}
        <AmbientGlow />
        <FilmGrain />
        <CursorTrail />
        <ScrollProgress />

        {/* Interaction listeners */}
        <KonamiListener />

        <Navbar />
        <main id="main" className="relative z-10">
          {children}
        </main>
        <NowPlaying />

        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#111017',
              border: '1px solid #24222F',
              color: '#F5F0E6',
            },
          }}
        />
      </body>
    </html>
  );
}
