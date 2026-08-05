/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#09090b', // zinc-950
        surface: '#18181b', // zinc-900
        ink: {
          DEFAULT: '#fafafa', // zinc-50
          soft: '#e4e4e7', // zinc-200
          muted: '#a1a1aa', // zinc-400
          faint: '#52525b', // zinc-600
        },
        line: {
          DEFAULT: '#27272a', // zinc-800
          strong: '#3f3f46', // zinc-700
        },
        accent: {
          DEFAULT: '#3b82f6', // blue-500
          soft: '#172554', // blue-950
          hover: '#2563eb', // blue-600
          glow: 'rgba(59, 130, 246, 0.15)',
        },
        night: {
          DEFAULT: '#09090b',
          soft: '#18181b',
          card: '#27272a',
          line: '#3f3f46',
          muted: '#a1a1aa',
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
        serif: [
          '"Instrument Serif"',
          'Georgia',
          'Times New Roman',
          'serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        'display': ['clamp(2.25rem, 5vw, 3.75rem)', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
        'title': ['clamp(1.75rem, 3vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        content: '1180px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.25)',
        lift: '0 4px 6px rgba(0,0,0,0.4), 0 16px 40px rgba(0,0,0,0.3)',
        glow: '0 0 0 1px rgba(59,130,246,0.2), 0 8px 32px rgba(59,130,246,0.15)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(31,107,79,0.12), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(230,200,160,0.2), transparent)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease forwards',
        'fade-in': 'fade-in 0.6s ease forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
