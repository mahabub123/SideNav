module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        Roboto:"'Roboto', sans-serif;",
        Poppins:"'Poppins', sans-serif;",
      },
      colors:{
        primary:'#060b26',
        secondary:'#101522'
      }
    },
    container:{
      center:true,
      padding:'1rem',
      screens:{
        lg:'1124px',
        xl:'1124px',
        '2xl':'1124px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
