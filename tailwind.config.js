/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Black': '#1E2832',
        'primary': '#e28320d',
      },
      fontFamily: {
        'primary': ['Roboto','san-serif'],
      },
    },
  },
  plugins: [],
}