module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-red-base": "#E6838F",
        "custom-blue-base": "#7CBAE4",
        "custom-blue-100": "#F0F5FA",
        "custom-gray-base": "#C4C4C4",
        "custom-gray-100": "#F8F7FA",
        "custom-gray-200": "#EEEEEE",
        "custom-black-base": "#454545",
        "custom-black-100": "#6C6C6C",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
