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
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
        info: '#3B82F6',
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
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'h1': ['3rem', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.02em' }], // 48px
        'h2': ['2.25rem', { lineHeight: '1.3', fontWeight: '700', letterSpacing: '-0.01em' }], // 36px
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '700', letterSpacing: '0' }], // 24px
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }], // 16px
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], // 18px
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // 14px
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }], // 12px
      },
      screens: {
        // Standard breakpoints (Tailwind defaults)
        // sm: '640px'  - Mobile landscape / Small tablet
        // md: '768px'  - Tablet
        // lg: '1024px' - Desktop
        // xl: '1280px' - Large desktop
        // 2xl: '1536px' - Extra large desktop
      },
    },
  },
  plugins: [],
}

export default config

