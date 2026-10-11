/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#050507',
          900: '#09090c',
          850: '#0e0e13',
          800: '#14141b',
          700: '#1c1c26',
          600: '#282836',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-subtle': 'rgba(255, 255, 255, 0.04)',
          card: 'rgba(18, 18, 25, 0.72)',
          'card-hover': 'rgba(24, 24, 34, 0.88)',
        },
        ivory: {
          50: '#fafaf6',
          100: '#f4f3ec',
          200: '#e7e5dc',
          300: '#d5d2c4',
          400: '#aba695',
          500: '#85806f',
          DEFAULT: '#f4f3ec',
          muted: '#a8a599',
          faint: '#6e6b62',
        },
        champagne: {
          100: '#fbf5eb',
          200: '#f4e7cf',
          300: '#e5d1ad',
          400: '#d5b98a',
          500: '#c5a880', // Primary muted gold
          600: '#a6885e',
          700: '#826845',
          DEFAULT: '#c5a880',
          glow: 'rgba(197, 168, 128, 0.12)',
        },
        wine: {
          400: '#a3283e',
          500: '#80182a',
          600: '#63101e',
          700: '#480a15',
          900: '#230409',
          DEFAULT: '#80182a',
          glow: 'rgba(128, 24, 42, 0.15)',
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Cinzel', 'Newsreader', 'Georgia', 'serif'],
      },
      animation: {
        'subtle-pulse': 'subtlePulse 8s ease-in-out infinite',
        'slow-drift': 'slowDrift 20s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        subtlePulse: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '0.35', transform: 'scale(1.04)' },
        },
        slowDrift: {
          '0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '100%': { transform: 'translate(25px, -35px) rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
