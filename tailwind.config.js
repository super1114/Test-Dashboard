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
      screens: {
        'coffee-h': { 'min': '1242px' },
        'coffee-l': { 'max': '1241px' },
        'max-lg': { 'max': '1023px' },
        'max-sm': { 'max': '639px' },
        'max-ss': { 'max': '480px' },
        'max-xs': { 'max': '370px' }
      },
      gridTemplateColumns: {
        navbar: '212px auto'
      },
      colors: {
        'grey-border': 'rgba(0, 0, 0, 0.1)',
        'grey-hover': 'rgba(0, 0, 0, 0.05)',
        'grey-text': 'rgba(0, 0, 0, 0.4)',
        'white-text': 'rgba(255, 255, 255, 0.4)',
        'grey-placeholder': 'rgba(0, 0, 0, 0.2)',
        'main-content': '#F7F9FB',
        'progress-text': '#8A8CD9',
        'competed-text': '#4AA785',
        'approved-text': '#FFC555',
        'pending-text': '#59A8D4',

        'btn-purple': '#4B5EFC',
        'operator-dark': '#4E505F',
        'operator-light': '#D2D3DA',
        'value-dark': '#2E2F38',
        'value-light': '#FFFFFF',
        'dark-back': '#17171C',
        'light-back': '#F1F2F3'
      }
    },
  },
  plugins: [],
}
