module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#1D1D27',
        primary: '#7D4BCD',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
