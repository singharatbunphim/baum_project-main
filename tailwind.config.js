/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/**/**/*.{html,ts}",
  ],
  theme: {
    extend: {
    },
    colors: {
      'green-custom': '#94c83f',
      'sky-custom': '#29c1d4',
      'gray-custom': '#E6E7E8',
      'gray1-custom': '#929394',
      'white': "#fff",
      'shadow': "rgba(230, 230, 230,0.8)",
      'blue-custom': "#2c98cd",
      'hamburger-shadow' : "rgba(0, 0, 0,0.8)",
      'hamburger-shadow-1' : "rgba(0, 0,0,0.4)",
      'red-custom': '#FF0000',
      'gray': {
        '50': '#f9fafb',
        '100': '#f3f4f6',
        '200': '#e5e7eb',
        '300': '#d1d5db',
        '400': '#9ca3af',
        '500': '#6b7280',
        '600': '#4b5563',
        '700': '#374151',
        '800': '#1f2937',
        '900': '#111827',
      },
      'shadow':{
        'sm': 'box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'shadow-2xl' : 'box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);'
      },
      'red': {
        '50':'rgb(254,242,242)',
        '100':'rgb(254,226,226)',
        '200':'rgb(254,242,242)',
        '300':'rgb(252,165,165)',
        '300':'rgb(248,113,113)',
        '300':'rgb(239,68,68)',
      },
      'yellow': {
        '100': 'rgb(254 249 195)',
        '200': 'rgb(254 240 138)',
        '300': 'rgb(253 224 71)',
        '400': 'rgb(250 204 21)',
      }

    }
  },
  plugins: [],
}
