/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  plugins: [require('@tailwindcss/forms'), require("daisyui")],
  daisyui: {
    darkTheme: 'light',
  },
  important: true,
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'new-white': '#fffafa',
        'new-black': '#343434',
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
