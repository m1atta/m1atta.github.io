/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark "instrument panel" base, warm neutral so it doesn't read as pure
        // software-dev-blue-black. Accent is a copper/solder tone (PCB trace +
        // solder joint), used sparingly as the single signature color.
        ink: {
          950: '#0b0c0d',
          900: '#121416',
          800: '#1a1d20',
          700: '#24282c',
          600: '#33383d',
          500: '#4a5157',
          400: '#6b7278',
          300: '#95999d',
          200: '#c2c5c7',
          100: '#e4e5e6',
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
