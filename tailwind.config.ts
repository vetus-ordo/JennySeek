import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'eduseek': {
          'heliotrope': '#9E76EC',
          'steel-pink': '#C838E5',
          'mauveine': '#781390',
          'ripe-plum': '#4D0C5A',
          'dark-violet': '#9E1B89',
          'jellyfish': '#3ABCF8',
          'picton-blue': '#09A4EC',
          'indigo-dye': '#045276',
          'prussian-blue': '#022938',
          'cerulean': '#067BAB',
          'orange-spice': '#FF8600',
          'wildfire': '#FF8833',
          'burnt-orange': '#884000',
          'chocolate': '#7A3300',
          'kelly-green': '#47A100',
          'satin-lime': '#315000',
          'keen-green': '#166600',
          'zia-olive': '#092900',
          'seasalt': '#F7F7F6',
          'platinum': '#E3E3DE',
          'cool-gray': '#808093',
          'dim-gray': '#656576',
          'eerie-black': '#20201D',
          'night': '#0B0B0A',
          'success': '#0C7D58',
          'error': '#DC1818',
        }
      },
      fontFamily: {
        'display': ['Montserrat', 'sans-serif'],
        'sans': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'title-desktop': ['4rem', { lineHeight: '1.1', letterSpacing: '0.06em' }],
        'h1-desktop': ['2.25rem', { lineHeight: '1.2', letterSpacing: '0' }],
        'h2-desktop': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0.01em' }],
        'h3-desktop': ['1.25rem', { lineHeight: '1.4', letterSpacing: '0' }],
        'body-desktop': ['1rem', { lineHeight: '1.6', letterSpacing: '0.02em' }],
        'label-desktop': ['1rem', { lineHeight: '1.5', letterSpacing: '-0.025em' }],
        'button-desktop': ['1rem', { lineHeight: '1.5', letterSpacing: '-0.25px' }],
        'small-desktop': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
};

export default config;
