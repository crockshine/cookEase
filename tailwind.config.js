/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'm750':{'max': '750px'},
      // => @media (max-width: 750px) { ... }

      'm594':{'max': '594px'},
      // => @media (max-width: 594px) { ... }

      'm350':{'max': '350px'},
      // => @media (max-width: 350px) { ... }
    },
    fontSize: {

      vw20: '20vw',
      vw19: '19vw',
      vw18: '18vw',
      vw17: '17vw',
      vw16: '16vw',
      vw15: '15vw',
      vw14: '14vw',
      vw10: '10vw',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem'


    }
  },
  fontFamily: {
    'sans': ['ui-sans-serif', 'system-ui'],
    'serif': ['ui-serif', 'Georgia'],
    'mono': ['ui-monospace', 'SFMono-Regular'],
    'display': ['Oswald'],
    'sunless': ['Sunless Day']
  },
  plugins: [],
}