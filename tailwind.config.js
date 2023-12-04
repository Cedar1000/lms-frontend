/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_blue: "#031837",
        secondary_blue: "#082450",
        tertiary_blue: "#197ED2",
        icon_orange: "#EBA352",
        icon_blue: "#42ADE2",
        icon_green: "#B4D6A4",
        delete_red: "#D24A4A",
      },
    },
  },
  plugins: [],
}

