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
          950: '#040406',
          900: '#08080c',
          850: '#0d0d13',
          800: '#13131c',
          700: '#1b1b26',
          600: '#272737',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-subtle': 'rgba(255, 255, 255, 0.04)',
          card: 'rgba(14, 14, 20, 0.72)',
          'card-hover': 'rgba(20, 20, 30, 0.88)',
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
          500: '#c5a880', // Primary muted luxury gold
          600: '#a6885e',
          700: '#826845',
          DEFAULT: '#c5a880',
          luminous: '#ecdab9',
          glow: 'rgba(197, 168, 128, 0.16)',
        },
        wine: {
          400: '#a3283e',
          500: '#80182a',
          600: '#63101e',
          700: '#480a15',
          900: '#230409',
          DEFAULT: '#80182a',
          glow: 'rgba(128, 24, 42, 0.18)',
        },
        starlight: {
          100: '#ffffff',
          200: '#f0f3fa',
          300: '#dbe2f0',
          DEFAULT: '#f0f3fa',
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Cinzel', 'Newsreader', 'Georgia', 'serif'],
      },
      animation: {
        'subtle-pulse': 'subtlePulse 8s ease-in-out infinite',
        'slow-drift': 'slowDrift 22s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 8s ease-in-out infinite',
        'light-sweep': 'lightSweep 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        subtlePulse: {
          '0%, 100%': { opacity: '0.18', transform: 'scale(1)' },
          '50%': { opacity: '0.32', transform: 'scale(1.05)' },
        },
        slowDrift: {
          '0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '50%': { transform: 'translate(20px, -25px) rotate(2deg)' },
          '100%': { transform: 'translate(-15px, 15px) rotate(-1.5deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        lightSweep: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(197, 168, 128, 0.25))' },
          '50%': { opacity: '0.85', filter: 'drop-shadow(0 0 30px rgba(197, 168, 128, 0.55))' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
