import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // EduSeek Brand Colors - Purple Family
        'heliotrope': '#9E76EC',
        'steel-pink': '#C838E5',
        'mauveine': '#781390',
        'ripe-plum': '#4D0C5A',
        'dark-violet': '#9E1B89',
        
        // EduSeek Brand Colors - Blue Family
        'jellyfish': '#3ABCF8',
        'picton-blue': '#09A4EC',
        'indigo-dye': '#045276',
        'prussian-blue': '#022938',
        'cerulean': '#067BAB',
        
        // EduSeek Brand Colors - Orange Family
        'orange-spice': '#FF8600',
        'wildfire': '#FF8833',
        'burnt-orange': '#884000',
        'chocolate': '#7A3300',
        
        // EduSeek Brand Colors - Green Family
        'kelly-green': '#47A100',
        'satin-lime': '#315000',
        'keen-green': '#166600',
        'zia-olive': '#092900',
        
        // Neutrals
        'seasalt': '#F7F7F6',
        'platinum': '#E3E3DE',
        'cool-gray': '#808093',
        'dim-gray': '#656576',
        'eerie-black': '#20201D',
        'night': '#0B0B0A',
        
        // Denotative Colors
        'success': '#0C7D58',
        'error': '#DC1818',
        'action': '#067BAB',
        
        // Legacy Brand Colors (for compatibility)
        'brand': {
          primary: '#9E1B89', // Dark Violet
          'primary-hover': '#861774',
          secondary: '#067BAB', // Cerulean
          'primary-light': '#FDF7FF',
          accent: '#9E76EC', // Heliotrope
        },
        
        // Denotative Colors (legacy)
        'denotative': {
          success: '#0C7D58',
          error: '#DC1818',
        },
        
        // Complete Neutral Color Scale
        'neutral': {
          10: '#F7F7F6', // Seasalt
          20: '#EBEBEB',
          30: '#E3E3DE', // Platinum
          40: '#D7D7D7',
          50: '#C2C2C2',
          60: '#AEAEAE',
          70: '#808093', // Cool Gray
          80: '#656576', // Dim Gray
          90: '#20201D', // Eerie Black
          100: '#0B0B0A', // Night
        },
        
        'bg-light': '#F7F7F6',
      },
      fontFamily: {
        display: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'open-sans': ['Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        // Desktop sizes
        'title-desktop': ['3.75rem', { lineHeight: '1.1', letterSpacing: '0.06em' }],
        'h1-desktop': ['3rem', { lineHeight: '1.2', letterSpacing: '0' }],
        'h2-desktop': ['2.25rem', { lineHeight: '1.3', letterSpacing: '0.01em' }],
        'h3-desktop': ['1.875rem', { lineHeight: '1.4', letterSpacing: '0' }],
        'body-desktop': ['1rem', { lineHeight: '1.6', letterSpacing: '0.02em' }],
        'label-desktop': ['1rem', { lineHeight: '1.5', letterSpacing: '-0.025em' }],
        'button-desktop': ['1rem', { lineHeight: '1.5', letterSpacing: '-0.0156em' }],
        'small-desktop': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0' }],
        
        // Mobile sizes
        'title-mobile': ['2.25rem', { lineHeight: '1.2', letterSpacing: '0.04em' }],
        'h1-mobile': ['2rem', { lineHeight: '1.3', letterSpacing: '0' }],
        'h2-mobile': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
        'h3-mobile': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
        'body-mobile': ['1rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'label-mobile': ['0.875rem', { lineHeight: '1.5', letterSpacing: '-0.02em' }],
        'button-mobile': ['1rem', { lineHeight: '1.5', letterSpacing: '-0.0156em' }],
        'small-mobile': ['0.75rem', { lineHeight: '1.5', letterSpacing: '-0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '54': '13.5rem',
        '58': '14.5rem',
        '62': '15.5rem',
        '66': '16.5rem',
        '70': '17.5rem',
        '74': '18.5rem',
        '78': '19.5rem',
        '82': '20.5rem',
        '86': '21.5rem',
        '90': '22.5rem',
        '94': '23.5rem',
        '98': '24.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'hard': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 0 1px rgba(159, 27, 137, 0.1), 0 4px 16px rgba(159, 27, 137, 0.12)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out',
        'slideUp': 'slideUp 0.4s ease-out',
        'slideDown': 'slideDown 0.4s ease-out',
        'slideLeft': 'slideLeft 0.4s ease-out',
        'slideRight': 'slideRight 0.4s ease-out',
        'scaleIn': 'scaleIn 0.3s ease-out',
        'bounce-soft': 'bounce-soft 2s infinite',
        'pulse-soft': 'pulse-soft 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      },
    },
  },
  plugins: [
    // Add any plugins you need
  ],
  darkMode: 'class', // Enable dark mode support
};

export default config;
