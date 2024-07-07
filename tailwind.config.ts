import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'background-hue': '#1B2A27',
        'accent-hue': '#B97375',
        'text-hue': '#F4FAFF'
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif']
      }
    },
  },
  plugins: [],
}
export default config
