import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Background colors
        bg: {
          DEFAULT: '#1A1A1E',
          secondary: '#202024',
          elevated: '#2A2A2E',
          surface: '#353538',
          'elevated-2': '#2F2F33',
        },
        // Accent colors - electric blue/purple
        primary: {
          DEFAULT: '#007AFF',
          hover: '#0051D5',
          light: '#3A9BFF',
          dark: '#0051D5',
          glow: 'rgba(0, 122, 255, 0.3)',
          'glow-soft': 'rgba(0, 122, 255, 0.1)',
        },
        // Text colors
        text: {
          main: '#FFFFFF',
          secondary: '#E0E0E0',
          muted: '#A0A0A5',
          'muted-2': '#C0C0C5',
          tertiary: '#808085',
        },
        // Border colors
        border: {
          DEFAULT: '#3A3A3E',
          subtle: '#2F2F33',
          glow: 'rgba(0, 122, 255, 0.2)',
          'glow-strong': 'rgba(0, 122, 255, 0.4)',
        },
        // Status colors
        success: {
          DEFAULT: '#10B981',
          light: '#34D399',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#F87171',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['2.5rem', { lineHeight: '1.3', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h3': ['1.875rem', { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h4': ['1.5rem', { lineHeight: '1.5', fontWeight: '600' }],
        'h5': ['1.25rem', { lineHeight: '1.5', fontWeight: '500' }],
        'h6': ['1.125rem', { lineHeight: '1.5', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['1rem', { lineHeight: '1.625' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'tiny': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 20px rgba(0, 122, 255, 0.3)',
        'glow-soft': '0 0 15px rgba(0, 122, 255, 0.2)',
        'glow-inner': 'inset 0 0 20px rgba(0, 122, 255, 0.1)',
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.2)',
        'border-glow': '0 0 0 1px rgba(0, 122, 255, 0.2), 0 0 10px rgba(0, 122, 255, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
export default config

