import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import { createThemes } from 'tw-colors'

/**
 * Kairos for Christ Christian Fellowship.
 * Brand scales are derived from the tokens in src/assets/css/custom/_tokens.css.
 * Keep the two files in sync — the CSS file documents intent, this one exposes utilities.
 */
const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/preline/dist/*.js',
  ],

  darkMode: ['class'],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1280px',
      },
    },

    fontFamily: {
      body: ['var(--font-body)', 'REM', 'sans-serif'],
      display: ['var(--font-body)', 'REM', 'sans-serif'],
      script: ['var(--font-script)', 'cursive'],
    },

    extend: {
      colors: {
        // Deep royal blue — navigation, footer, major bands, primary buttons.
        primary: {
          50: '#f1f2fb',
          100: '#dee0f4',
          200: '#bcc0e9',
          300: '#9298d9',
          400: '#636cc2',
          500: '#3b45ab',
          600: '#17249e',
          700: '#101d83',
          800: '#0d1868',
          900: '#0b1450',
          950: '#070d33',
          DEFAULT: '#101d83',
        },

        // Midnight navy — headings and dark image overlays.
        navy: {
          400: '#2f4d70',
          500: '#1e3c5c',
          600: '#173049',
          700: '#12263d',
          800: '#0e1d2e',
          900: '#0a1522',
          DEFAULT: '#12263d',
        },

        // Muted terracotta — ministry names, labels, secondary accents.
        secondary: {
          50: '#faf3f1',
          100: '#f3e3de',
          200: '#e5c6bd',
          300: '#d3a496',
          400: '#be8572',
          500: '#a96956',
          600: '#8f5445',
          700: '#744338',
          800: '#5c362d',
          900: '#4a2c25',
          DEFAULT: '#a96956',
        },

        // Warm orange — calls to action, highlights, handwritten accents.
        accent: {
          50: '#fef7ec',
          100: '#fceacc',
          200: '#f9d295',
          300: '#f6ba5e',
          400: '#f4a838',
          500: '#f29a22',
          600: '#d87f0f',
          700: '#b46410',
          800: '#8f4f14',
          900: '#6b3c12',
          DEFAULT: '#f29a22',
        },

        // Warm neutral surfaces.
        cream: {
          50: '#fbf6ef',
          100: '#f3e8da',
          200: '#ead9c5',
          300: '#dcc6ae',
          400: '#c9ac8d',
          DEFAULT: '#f3e8da',
        },
        sand: '#dcc6ae',

        // Text.
        ink: '#1c1b1a',
        muted: '#5a636b',
        'on-dark': '#fff9f0',

        // Lines.
        line: {
          DEFAULT: '#e0cdb6',
          strong: '#c9ac8d',
        },
      },

      borderRadius: {
        card: '1.25rem',
        pill: '9999px',
      },

      boxShadow: {
        sm: 'var(--shadow-sm)',
        card: 'var(--shadow-card)',
        lifted: 'var(--shadow-lifted)',
      },

      transitionDuration: {
        fast: '150ms',
        base: '250ms',
        slow: '400ms',
      },

      maxWidth: {
        prose: '68ch',
        measure: '58ch',
      },

      spacing: {
        section: '5rem',
        'section-lg': '7rem',
      },

      zIndex: {
        60: '60',
        70: '70',
      },

      keyframes: {
        load: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },

  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // Retained for the authenticated admin/auth areas, which still use the
    // neutral `default` scale and the class-based dark theme.
    createThemes(
      {
        light: {
          default: colors.zinc,
        },

        dark: {
          default: {
            50: '#09090b',
            100: '#18181b',
            200: '#27272a',
            300: '#3f3f46',
            400: '#52525b',
            500: '#71717a',
            600: '#a1a1aa',
            700: '#d4d4d8',
            800: '#e4e4e7',
            900: '#f4f4f5',
            950: '#fafafa',
          },
        },
      },
      {
        defaultTheme: 'light',
      }
    ),
  ],
}
export default config
