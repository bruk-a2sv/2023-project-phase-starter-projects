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
        'primary':'#264FAD',
        'secondary': '#2B2A35',
        'tertiary': '#545465',
      },
      fontFamily: {
        'poppins': "var(--font-poppins)",
        'lato':'var(--font-lato)',
        'nunito':'var(--font-nunito)',
      },
    },
  },
  plugins: [],
}
export default config
