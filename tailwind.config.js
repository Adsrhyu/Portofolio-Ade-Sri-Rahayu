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
        'soft-pink': '#FFF5F7',
        'soft-pink-dark': '#181114',
        'blush': '#FED7E2',
        'blush-light': '#FFF0F4',
        'rose-main': '#E11D48',
        'rose-accent': '#BE123C',
        'rose-soft': '#F43F5E',
        'dark-slate': '#1E293B',
        'slate-body': '#334155',
        'slate-muted': '#64748B',
        'card-bg': '#FFFFFF',
        'card-border': '#FFE4E9',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Lato', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'soft-rose': '0 10px 30px -5px rgba(225, 29, 72, 0.08), 0 4px 6px -2px rgba(225, 29, 72, 0.04)',
        'soft-rose-hover': '0 20px 40px -10px rgba(225, 29, 72, 0.18), 0 8px 12px -3px rgba(225, 29, 72, 0.08)',
        'glow-rose': '0 0 25px rgba(225, 29, 72, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(3deg)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
