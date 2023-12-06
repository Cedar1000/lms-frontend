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
        dullwhite: "#D6D6D6",
        shadedblue: "#0F2B55",
        linecolor: "#353297",
        borderpurple: "#197ED2",
        assignmentpurple: "#67B6F8",
        textpink: "#DFE4EB",
        lightred: "#D24A4A",
        lightpink: "#C9CFD8"
      },
    },
  },
  plugins: [],
}

