/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark "instrument panel" base with a cool navy cast, to sit under the
        // animated blue grid backdrop. Accent is the same electric blue as the
        // grid/cursor glow, used as the single signature color site-wide.
        ink: {
          950: '#060910',
          900: '#0d1420',
          800: '#151d2c',
          700: '#202a3a',
          600: '#313d50',
          500: '#4a5668',
          400: '#6c7890',
          300: '#97a1b5',
          200: '#c3c9d6',
          100: '#e6e9ef',
        },
        accent: {
          600: '#2563eb',
          500: '#3b82f6',
          400: '#60a5fa',
          300: '#93c5fd',
        },
        signal: {
          500: '#5fb88a', // muted scope-trace green, used only for small "status" accents
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          '"IBM Plex Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '32px 32px',
      },
    },
  },
  plugins: [],
}
