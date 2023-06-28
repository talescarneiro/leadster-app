/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F0F8FF",
        "secondary": "#0077F4",
        "blueprimary": "#2c83fb",
        "bluesecondary": "#1f76f0"
      },
      backgroundColor: {
        "light-gray": "#F9F9F9",
        "medium-gray": "#D3D3D3",
      },
      borderWidth: {
        "2": "2px",
      },
      screens: {
        "xs": "310px",
      },
      width: {
        '100-screen': '100%',
        '80-screen': '80%',
        '65-screen': '65%',
        '50-screen': '50%',
      }
    },
  },
  important: true,
  plugins: [],
}
