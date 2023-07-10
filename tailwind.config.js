/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
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
      colors: {
        xcolor: {
          900: '#0D1321',
          800: '#1B2846',
          700: '#4D5870',
          600: '#2C4070',
          500: '#547BD6',
          400: '#D8ECFF',
          300: '#EFF1F3',
          200: '#F5F5F5',
          100: '#007AFF',
        },
      },
    },

    fontFamily: {
      sans: ['Zen Kaku Gothic New', 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
