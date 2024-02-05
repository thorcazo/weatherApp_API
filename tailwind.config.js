/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primario': '#023047',
        'degradado-azul': '#8ECAE6',
        'degradado-azul-oscuro': '#219EBC',
        'button': '#FFB703',
        'button-hover': '#FB8500',
      }
    }
  },
  plugins: [],
}