/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {   
      'sans' : ["San Francisco", 'ui-sans-serif', 'system-ui'],
      'serif': ['Playfair Display'],
      'mono' : ['IBM Plex Mono']
    },
    extend: {
      colors: {
        'jelly-bean': {
          '50': '#f0fafb',
          '100': '#d8eff5',
          '200': '#b6e0eb',
          '300': '#84cadc',
          '400': '#4baac5',
          '500': '#2f8eab',
          '600': '#2d7b9a',
          '700': '#285e76',
          '800': '#284f62',
          '900': '#254354',
          '950': '#142b38',
        },
      }
    },
  },
  plugins: [],
}

