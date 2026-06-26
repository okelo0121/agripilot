import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#145231',
          950: '#092e20',
        },
        'earth': {
          50: '#faf8f3',
          100: '#f5f1e8',
          200: '#ede8dd',
          300: '#ddd4c4',
          400: '#c9bda8',
          500: '#b8a892',
          600: '#8b7d6b',
          700: '#6e6557',
          800: '#504a42',
          900: '#3d3a35',
        },
      },
    },
  },
  plugins: [],
}
export default config
