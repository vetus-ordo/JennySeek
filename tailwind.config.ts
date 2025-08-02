// vetus-ordo/jenny-figma/jenny-figma-7fa149cb7561ba7a2621a0b8bcb17eb9edb3a065/tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        // Brand Colors from Style Guide
        'brand': {
          primary: '#476CF1',
          'primary-light': '#E9EFFD',
          secondary: '#F1476C',
        },
        // Denotative Colors from Style Guide
        'denotative': {
          success: '#34A853',
          'success-dark': '#007B3E',
          'success-light': '#E2F3E7',
          error: '#EA4335',
          'error-dark': '#C5221F',
          'error-light': 'rgba(250, 222, 220, 1)', // Converted from screenshot
          warning: '#FBBC05',
          'warning-dark': '#E39B00',
          'warning-light': '#FDEEC9',
          info: '#4285F4',
          'info-dark': '#185ABC',
          'info-light': '#E8F0FE',
        },
        // Neutral Colors from Style Guide
        'neutral': {
          10: '#FFFFFF',
          20: '#F5F5F5',
          30: '#EBEBEB',
          40: '#D7D7D7',
          50: '#C2C2C2',
          60: '#AEAEAE',
          70: '#8C8C8C',
          80: '#6B6B6B',
          90: '#4A4A4A',
          100: '#2A2A2A',
        },
        // Background & Text Colors from Style Guide
        'bg-light': '#F8F8F8',
        'text-dark': '#2D3748', // Using a dark neutral for base text
      },
      fontSize: {
        // Desktop Font Sizes from Style Guide
        'title-desktop': '3.75rem', // 60px
        'h1-desktop': '3rem',       // 48px
        'h2-desktop': '2.25rem',    // 36px
        'h3-desktop': '1.875rem',   // 30px
        'body-desktop': '1rem',       // 16px
        'label-desktop': '1rem',      // 16px
        'button-desktop': '1rem',   // 16px
        'small-desktop': '0.875rem',  // 14px

        // Mobile Font Sizes from Style Guide
        'title-mobile': '2.25rem',    // 36px
        'h1-mobile': '2rem',       // 32px
        'h2-mobile': '1.5rem',     // 24px
        'h3-mobile': '1.25rem',    // 20px
        'body-mobile': '1rem',        // 16px
        'label-mobile': '0.875rem',   // 14px
        'button-mobile': '1rem',    // 16px
        'small-mobile': '0.75rem',    // 12px
      },
    },
  },
  plugins: [],
};
export default config;