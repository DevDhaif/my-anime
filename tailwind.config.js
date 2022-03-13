module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        load:{
          "from": {
            transform: "rotate(0deg)"
          },
          "to":{
            transform:("rotate(360deg)")
          }
        },
      },
      animation: {
        load:"load 1s linear infinite"
      },
      colors: {
        bg:{
          'dark':'#0a0c11',
          'dark-nav':'#232429',
          'prime':'#68848c',
          'second':'#f5f3ed',
          'third':'#fefefe',
          'forth':'#3a300a'
        },
        t:{
          'dark':'#fbfafc',
          'prime':'#ebf2d6',
        'second':'#cf1217',
        'third':'#fffff9',
        }
      },
      fontFamily: {
        'robert': ['Roboto Mono', 'monospace'],
        'poppins':['Poppins', 'sans-serif']
      },
    },
    
  },
  plugins: [],
}
