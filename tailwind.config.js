/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        bgDark: "#0E1116",
        bgLight: "#FFFFFF",

        navDark: "#161B22",
        navLight: "#F6F8FA",

        borderDark: "#3E444C",
        borderLight: "#D2D9DF",

        white: "#F2F7FC",
        black: "#232323",
        gray: "#9399A1",

        grayLight: "#5B636D",
        grayDark: "#90969D",

        blueDark: "#5991F1",
        blueLight: "#2E67D3",
        
        lightBlue: "#89BEF5",
      },

      fontFamily: {
        lbl: ["Lato-Black", "sans-serif"],
        lbli: ["Lato-BlackItalic", "sans-serif"],
        lb: ["Lato-Bold", "sans-serif"],
        lbi: ["Lato-BoldItalic", "sans-serif"],
        li: ["Lato-Italic", "sans-serif"],
        ll: ["Lato-Light", "sans-serif"],
        lli: ["Lato-LightItalic", "sans-serif"],
        l: ["Lato-Regular", "sans-serif"],

        s: ["SourceCodePro", "sans-serif"],
        si: ["SourceCodeProItalic", "sans-serif"],
      }
    },
  },
  plugins: [],
}