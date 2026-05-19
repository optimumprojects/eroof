import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          foreground: '#0DD1D7',
        },
        secondary: {
          DEFAULT: '#0DD1D7',
          foreground: '#000000',
        },
        background: '#FFFFFF',
        foreground: '#000000',
        'action-orange': '#FFEB3B',
        'dark-blue': '#000000',
        'dark-card': '#282727',
        'trust-green': '#22C55E',
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        paragraph: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
