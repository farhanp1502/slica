/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      height:{
        "view":"93vh"
      },
      backgroundColor:{
        primary:"rgb(229,237,250)",
        secondary:"rgb(255,235,232)",
        third:"#E5F5FF",
        four:"#E8F6E9",
      },
      width:{
        wid:"23rem"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

