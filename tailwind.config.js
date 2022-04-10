const theme = require('tailwindcss/defaultTheme')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      maxwidth: '48rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'grey': {
        100: '#212529',
        200: '#343A40',
        300: '#495057',
        400: '#6C757D',
        500: '#ADB5BD',
        600: '#CED4DA',
        700: '#DEE2E6',
        800: '#E9ECEF',
        900: '#E9ECEF',
      },
      'aqua': {
        100: '#07BEB8',
        200: '#68D8D6',
        300: '#9CEAEF',
        400: '#9CEAEF',
        500: '#C4FFF9',
        600: '#E5FFFC',
      },
      listStyleType: {
        navList: 'navList',
      },
      extend: {
        fontFamily: {
          'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
        },
        /*boxShadow: {
          'sm-cus': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        },*/
      },
    },
    plugins: [
      /*function ({ addComponents }) {
        addComponents({
          '.container': {
            maxWidth: '928px',
            margin: '0 8rem',
            padding: '0 8rem',
            '@screen sm': {
              maxWidth: '36rem',
            },
            '@screen md': {
              maxWidth: '36rem',
            },
            '@screen lg': {
              maxWidth: '48rem',
            },
            '@screen xl': {
              maxWidth: '48rem',
            },
            '@screen 2xl': {
              maxWidth: '24rem',
            },
          },
        });
      },*/
    ],
  }
}
