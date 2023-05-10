/** @type {import('tailwindcss').Config} */
module.exports = {
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
      gridTemplateColumns: {
        navbar: '212px auto'
      },
      colors: {
        'grey-border': 'rgba(0, 0, 0, 0.1)',
        'grey-hover': 'rgba(0, 0, 0, 0.05)',
        'grey-text': 'rgba(0, 0, 0, 0.4)',
        'grey-placeholder': 'rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
}
