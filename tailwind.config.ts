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
        // CORRECTED - Brand Colors from the FINAL Style Guide
        'brand': {
          primary: '#9E1B89',      // Dark Violet
          'primary-hover': '#861774', // A slightly darker violet for hover
          secondary: '#067BAB',    // Cerulean
          'primary-light': '#FDF7FF', // A custom, very light purple for backgrounds
          accent: '#D76FEC',       // Heliotrope (for romantic accents)
        },
        // Denotative Colors
        'denotative': {
          success: '#0C7D58',      // Asian Spice
          error: '#DC1818',        // Rojo
        },
        // COMPLETE Neutral Color Scale from Style Guide
        'neutral': {
          10: '#F7F7F6',          // Seasalt
          20: '#EBEBEB',          // Light Gray (for steps)
          30: '#E3E3DE',          // Platinum
          40: '#D7D7D7',          // Light Gray (for steps)
          50: '#C2C2C2',          // Light Gray (for steps)
          60: '#AEAEAE',          // Light Gray (for steps)
          70: '#808093',          // Cool Gray
          80: '#656576',          // Dim Gray (Used for Disabled)
          90: '#20201D',          // Eerie Black
          100: '#0B0B0A',         // Night
        },
        'bg-light': '#F7F7F6',      // Using Seasalt for the main light background
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'title-desktop': '3.75rem','h1-desktop': '3rem','h2-desktop': '2.25rem','h3-desktop': '1.875rem','body-desktop': '1rem','label-desktop': '1rem','button-desktop': '1rem','small-desktop': '0.875rem',
        'title-mobile': '2.25rem','h1-mobile': '2rem','h2-mobile': '1.5rem','h3-mobile': '1.25rem','body-mobile': '1rem','label-mobile': '0.875rem','button-mobile': '1rem','small-mobile': '0.75rem',
      },
    },
  },
  plugins: [],
};
export default config;
