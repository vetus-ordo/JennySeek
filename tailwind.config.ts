import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Correctly mapped font sizes from your original config
      fontSize: {
        'title-desktop': ['64px', { lineHeight: '78px', letterSpacing: '0.06em', fontWeight: '700' }],
        'h1-desktop': ['36px', { lineHeight: '42px', fontWeight: '700' }],
        'h2-desktop': ['20px', { lineHeight: '23px', letterSpacing: '0.01em', fontWeight: '700' }],
        'h3-desktop': ['15px', { lineHeight: '18px', fontWeight: '700' }],
        'body-desktop': ['16px', { lineHeight: '19px', letterSpacing: '0.02em', fontWeight: '400' }],
        'label-desktop': ['18px', { lineHeight: '21px', letterSpacing: '-0.025em', fontWeight: '600' }],
        'button-desktop': ['18px', { lineHeight: '21px', letterSpacing: '-0.25px', fontWeight: '600' }],
        'small-desktop': ['15px', { lineHeight: '18px', letterSpacing: '-0.025em', fontWeight: '400' }],
        'title-mobile': ['60px', { lineHeight: '73px', letterSpacing: '0.04em', fontWeight: '700' }],
        'h1-mobile': ['32px', { lineHeight: '38px', fontWeight: '700' }],
        'h2-mobile': ['16px', { lineHeight: '19px', letterSpacing: '0.02em', fontWeight: '700' }],
        'h3-mobile': ['11px', { lineHeight: '13px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'body-mobile': ['14px', { lineHeight: '16px', letterSpacing: '0.01em', fontWeight: '400' }],
        'label-mobile': ['14px', { lineHeight: '16px', letterSpacing: '-0.02em', fontWeight: '600' }],
        'button-mobile': ['18px', { lineHeight: '21px', letterSpacing: '-0.25px', fontWeight: '600' }],
        'small-mobile': ['11px', { lineHeight: '13px', letterSpacing: '-0.025em', fontWeight: '400' }],
      },
      // Corrected and reorganized color palette based on your image
      colors: {
        // Brand Colors
        'brand-primary': '#1E1889',      // Dark Violet
        'brand-secondary': '#067BAB',     // Cerulean

        // Background & Text Colors
        'bg-light': '#F7F7F9',           // Seasalt
        'bg-dark': '#08080A',            // Night
        'text-light': '#F7F7F9',         // Seasalt
        'text-dark': '#08080A',          // Night

        // Neutral Shades
        'neutral-dark': '#202D7D',       // Eerie Black
        'neutral-light': '#E3E3DE',      // Platinum
        'neutral-cool-gray': '#8D8D93',  // Cool Gray
        'neutral-dim-gray': '#656578',   // Dim Gray

        // Denotative / State Colors
        'denotative-success': '#0C7B18', // Asian Spice
        'denotative-error': '#DC1B1B',   // Rojo
        'denotative-action-hover': '#2D9BDB', // Celestial Blue
        'denotative-action-active': '#1E5083', // Bice Blue

        // Accent Colors
        'accent-orange-spice': '#EA6000',
        'accent-blue-violet': '#5F3AE5',
        'accent-kelly-green': '#24D400',
        'accent-xanthous': '#FFDD2D',
        'accent-hellebore': '#674FFD',
        'accent-jellyfish': '#4B83D3',
        'accent-picton-blue': '#30A8EC',
        'accent-sandy-brown': '#FFAC33',
        'accent-mauve': '#9F49F3',
        'accent-crocus-violet': '#9D74C7',
        'accent-harlequin': '#47FF1F',
        'accent-satin-lime': '#D1EC00',
        'accent-peach-yellow': '#FDE1A1',
        'accent-peach-grandis': '#FFC6A3',
        'accent-mauveine': '#9F49D8',
        'accent-indigo-dye': '#1E5083',
        'accent-prussian-blue': '#02257B',
        'accent-burnt-orange': '#B85500',
        'accent-chrysler-blue': '#2D9BDB',
        'accent-blue-gem': '#27129D',
        'accent-keen-green': '#51A900',
        'accent-zia-olive': '#929200',
        'accent-cambridge': '#709A75',
        'accent-tigers-eye': '#D26F24',

        // Component-specific semantic colors
        // These map the abstract roles in your CSS to the correct palette colors
        'btn-primary-bg': '#1E1889',             // brand-primary
        'btn-primary-bg-hover': '#5F3AE5',        // accent-blue-violet
        'btn-primary-bg-focus': '#9F49F3',         // accent-mauve
        
        'btn-secondary-text': '#067BAB',          // brand-secondary
        'btn-secondary-text-hover': '#2D9BDB',    // denotative-action-hover
        'btn-secondary-bg': 'transparent',
        'btn-secondary-bg-hover': 'rgba(6, 123, 171, 0.1)', // 10% opacity of brand-secondary
        
        'btn-tertiary-text': '#067BAB',           // brand-secondary
        'btn-tertiary-border-hover': '#2D9BDB',   // denotative-action-hover
        
        'btn-disabled-bg': '#E3E3DE',             // neutral-light
        'btn-disabled-text': '#8D8D93',           // neutral-cool-gray
        'btn-disabled-secondary-text': '#8D8D93', // neutral-cool-gray
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
