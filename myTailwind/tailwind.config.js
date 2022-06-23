/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{html,ts}', './projects/**/*.{html,js,jsx,ts,tsx,vue}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
