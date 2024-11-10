/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-cyan': '#22DAA8',
        'custom-orange': '#EC5632',
        'custom-orange-alt': '#FE3F11',
      },
      boxShadow: {
        'custom-shadow': '0px 4px 4px 0px #00000040',
      },
      textShadow: {
        'custom-shadow': '0px 1px 2px 0px #00000040',
      }
    },
  },
  plugins: [],
}
