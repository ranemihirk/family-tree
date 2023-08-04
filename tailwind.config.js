/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  plugins: [require('@tailwindcss/forms'), require("daisyui")],
  daisyui: {
    darkTheme: 'dark',
  },
  important: true,
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'new-white': '#fffafa',
        'new-black': '#343434',
        'new-bg': '#25221b',
        'new-text': '#d7dae1'
      },
      height: {
				inherit: 'inherit',
			},
			width: {
				inherit: 'inherit',
			},
    },
  },
}
