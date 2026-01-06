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
        primary: {
          black: '#000000',
          white: '#FFFFFF',
        },
        gray: {
          dark: '#1A1A1A',
          medium: '#2A2A2A',
          light: '#CCCCCC',
          subtle: '#808080',
          'very-light': '#FAFAFA',
          'very-light-alt': '#F5F5F5',
        },
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '80': '80px',
        '96': '96px',
        '128': '128px',
      },
      fontSize: {
        'h1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'h2': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h3': ['1.75rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h4': ['1.375rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.25rem', { lineHeight: '1.7' }],
        'body': ['1.125rem', { lineHeight: '1.7' }],
        'small': ['0.9375rem', { lineHeight: '1.6' }],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.06)',
        'large': '0 8px 32px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'soft': '8px',
        'medium': '12px',
        'large': '16px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config

