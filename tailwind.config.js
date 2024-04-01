/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'm1500':{'max': '1500px'},
      // => @media (max-width: 1500px) { ... }

      'm1300':{'max': '1300px'},
      // => @media (max-width: 1300px) { ... }

      'm1080':{'max': '1080px'},
      // => @media (max-width: 1080px) { ... }

      'm980':{'max': '980px'},
      // => @media (max-width: 980px) { ... }

      'm900':{'max': '900px'},
      // => @media (max-width: 900px) { ... }

      'm750':{'max': '750px'},
      // => @media (max-width: 750px) { ... }

      'm594':{'max': '594px'},
      // => @media (max-width: 594px) { ... }

      'm470':{'max': '470px'},
      // => @media (max-width: 470px) { ... }

      'm350':{'max': '350px'},
      // => @media (max-width: 350px) { ... }

      'm260':{'max': '260px'},
      // => @media (max-width: 260px) { ... }

      'mh1275':{'raw': '(max-height: 1275px)'},
// => @media (max-height: 1275px) { ... }

      'mh720':{'raw': '(max-height: 720px)'},
// => @media (max-height: 720px) { ... }

      'mh700':{'raw': '(max-height: 700px)'},
// => @media (max-height: 700px) { ... }
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
      vw2_5: '2.5vw',
      vh3: '3vh',
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