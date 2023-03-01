const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '800px',
      'mid-lg':'1000px',
      'lg': '1200px',
      'xl': '1360px',
      '2xl': '1600px',
    },

    extend:
    {
      backgroundImage:
      {
        'bg-1': "url('/src/Assets/images/top-header-banner10.jpg')",
        'B4bg': "url('/src/Assets/images/Gallery/nv.jpg')",
        'B7bg': "url('/src/Assets/images/bedroom/bed08.jpg')",
      },

      backgroundColor:
      {
        'bg-banner03': '#f2f2f2'
      },
      colors:
      {
        'b3T-color': '#797979'
      },
    },
    fontFamily:
    {
      diplayFair: ['Playfair Display', 'serif'],
      openSans: ['Open Sans', 'sans-serif'],
      lora: ['Lora', 'serif']
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "black"],
  },

}
