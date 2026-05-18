import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        // Studio palette — sophisticated retro
        ink: {
          0: '#08070C',     // deepest black
          50: '#0B0A10',    // page bg
          100: '#111017',   // surface
          200: '#1A1822',   // raised surface
          300: '#24222F',   // border / hover
          400: '#32303F',   // strong border
        },
        bone: {
          50: '#F5F0E6',    // warm off-white (vinyl label)
          100: '#E8E1D4',
          200: '#C9C0AE',
          400: '#8A8275',
          600: '#5C554A',
        },
        // Warm purple — primary accent
        magenta: {
          400: '#C77DFF',
          500: '#A855F7',
          600: '#7E22CE',
        },
        // Electric blue
        cobalt: {
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
        },
        // Amber — vintage warmth
        amber: {
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
        // Soft magenta / coral
        rose: {
          400: '#FB7185',
          500: '#F43F5E',
        },
      },
      borderRadius: {
        lg: '0.625rem',
        md: '0.5rem',
        sm: '0.375rem',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        'studio-radial': 'radial-gradient(1200px 600px at 20% -10%, rgba(168, 85, 247, 0.15), transparent 60%), radial-gradient(900px 500px at 90% 10%, rgba(14, 165, 233, 0.10), transparent 60%), radial-gradient(800px 400px at 50% 100%, rgba(245, 158, 11, 0.06), transparent 70%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'equalizer': {
          '0%, 100%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'tape-load': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'equalizer': 'equalizer 1.2s ease-in-out infinite',
        'spin-slow': 'spin-slow 12s linear infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'tape-load': 'tape-load 1.4s cubic-bezier(0.65, 0, 0.35, 1) forwards',
      },
      transitionTimingFunction: {
        'studio': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [animate],
};

export default config;
