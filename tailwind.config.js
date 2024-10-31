/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

      },
      fontFamily: {
        // Lato
        lbl: ["Lato-Black", "sans-serif"],
        lbli: ["Lato-BlackItalic", "sans-serif"],
        lb: ["Lato-Bold", "sans-serif"],
        lbi: ["Lato-BoldItalic", "sans-serif"],
        li: ["Lato-Italic", "sans-serif"],
        ll: ["Lato-Light", "sans-serif"],
        lli: ["Lato-LightItalic", "sans-serif"],
        l: ["Lato-Regular", "sans-serif"],

        // Source Code Pro
        s: ["SourceCodePro", "sans-serif"],
        si: ["SourceCodeProItalic", "sans-serif"],
      }
    },
  },
  plugins: [],
}