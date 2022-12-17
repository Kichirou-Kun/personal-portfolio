/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/common/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/ui/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PRIMARY_COLOR: "#D0DFFF",
        SECONDARY_COLOR: "#A3B3BC",
      },
      backgroundColor: {
        BODY_BG: "#0D1117",
        PRIMARY_BG: "#242C38",
        SECONDARY_BG: "#161B22",
      },
      fontFamily: {
        body: ["Poppins", "san-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
// bg-gradient-to-r from-[#619BFD] to-[#A17CF9] bg-clip-text  text-transparent
