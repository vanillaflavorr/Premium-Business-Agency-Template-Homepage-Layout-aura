import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fdf8f0',
          100: '#f5e8ce',
          200: '#edd7a8',
          300: '#e2c47d',
          400: '#d7b45e',
          500: '#c7a46b',
          600: '#b08d54',
          700: '#8a6e3f',
          800: '#6b5330',
          900: '#4d3b22',
        },
        ink: {
          50:  '#f5f5f0',
          100: '#e0dfd8',
          200: '#b8b7ae',
          300: '#8f8e85',
          400: '#6b6a62',
          500: '#4a4942',
          600: '#2d2c27',
          700: '#1c1b18',
          800: '#0d0d0b',
          900: '#0a0a0a',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      maxWidth: {
        'page': '1280px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
