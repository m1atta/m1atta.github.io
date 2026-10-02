/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark "instrument panel" base with a cool navy cast, to sit under the
        // animated blue grid backdrop. Accent is a copper/solder tone (PCB
        // trace + solder joint), used sparingly as the single signature color.
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
        copper: {
          600: '#a85f2e',
          500: '#c87a3e',
          400: '#dd9657',
          300: '#eab378',
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
