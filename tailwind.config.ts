import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ['white-5']: 'rgba(255,255,255,0.05)',
        ['white-10']: 'rgba(255,255,255,0.1)',
        ['white-15']: 'rgba(255,255,255,0.15)',
        ['white-20']: 'rgba(255,255,255,0.2)',
        ['white-25']: 'rgba(255,255,255,0.25)',
        ['white-80']: 'rgba(255,255,255,0.8)',
        ['white-50']: 'rgba(255,255,255,0.5)',
        ['white-60']: 'rgba(255,255,255,0.6)',
        ['black-50']: 'rgba(0,0,0,0.5)',
        ['purple-50']: 'rgba(102,52,255,0.5)',
        ['link-blue']: '#82A5FF',
      },
      lineHeight: {
        ['160']: '160%',
        ['110']: '110%',
        ['13']: '3.25rem',
      },
      screens: {
        // iPhone 12/13 Pro Max
        ['xs']: '428px',
      },
      fontSize: {
        ['xxs']: '10px',
        ['xs']: '12px',
        ['2.5xl']: '28px',
        ['3.5xl']: '32px',
        ['4.5xl']: '40px',
      },
      aspectRatio: {
        ['video']: '16 / 9',
      },
      maxWidth: {
        ['blog-text']: '680px',
        ['wrapper-md']: '920px',
        ['wrapper-lg']: '1080px',
      },
      spacing: {
        [7.5]: '1.875rem',
        [15]: '3.75rem',
        [30]: '7.5rem',
        [40]: '10rem',
      },
      flex: {
        [2]: '2 2 0%',
        [3]: '3 3 0%',
        [4]: '4 4 0%',
        [5]: '5 5 0%',
        [6]: '6 6 0%',
        [7]: '7 7 0%',
      },
      animation: {
        ['fade-in']: 'fade-in 0.5s linear',
      },
      keyframes: {
        ['fade-in']: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
      },
      outlineWidth: {
        [12]: '12px',
      },
      outlineOffset: {
        [12]: '12px',
      },
      transitionDuration: {
        [400]: '400ms',
      },
    },
  },
  plugins: [],
} satisfies Config