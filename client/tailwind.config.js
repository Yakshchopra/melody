module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#1D1D27',
        border: '##3f3f49',
        primary: '#7D4BCD',
        bglight: '#292938',
        input: '#37374A',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
