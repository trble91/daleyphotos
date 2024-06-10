/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./page/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./screens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  purge: false,
  theme: {
    extend: {},
  },
  plugins: [],
}
