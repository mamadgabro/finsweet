/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      'mobile': '200px',
      // => @media (min-width: 640px) { ... }
      'tablet': '750px',
      // => @media (min-width: 640px) { ... }

      'desktop': '1000px',
      // => @media (min-width: 1024px) { ... }
      'bigdesktop': '1250px',
      // => @media (min-width: 1024px) { ... }
    },

    extend: {},
  },
  plugins: [],
}

