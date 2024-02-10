// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{html,ts}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'primario': '#023047',
//         'secundario': '#FFB703',
//         'degradado-azul': '#8ECAE6',
//         'degradado-azul-oscuro': '#219EBC',
//         'button': '#FFB703',
//         'button-hover': '#FB8500',
//         'fondo': '#F7F7FF',
//       }
//     }
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#ffffff',
        'headline': '#094067',
        'paragraph': '#5f6c7b',
        'button': '#3da9fc',
        'button-text': '#ffffff',
        'stroke': '#094067',
        'main': '#ffffff',
        'highlight': '#3da9fc',
        'secondary': '#90b4ce',
        'tertiary': '#ef4565',

        /* para la temperatura */
        'high': '#F28585',
        'medium': '#FFA447',
        'low': '#40A2E3',



      }
    }
  },
  plugins: [],
}
