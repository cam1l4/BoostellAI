export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

safelist: [
  'opacity-0', 'opacity-100',
  'translate-x-0', '-translate-x-10', 'translate-x-10'
]
}