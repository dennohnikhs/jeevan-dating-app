/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ja-black": "#314051",
        "ja-red": "#d8465b",
        "ja-gray": "#b9bdc2",
        "ja-white": "white",
      },
      screens: {
        mobile: "375px",
        "mobile-m": "425px",
        "mobile-l": "768px",
        tablet: "1024px",
        laptop: "1440px",
        "laptop-l": "1680px",
        "laptop-xl": "1920px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      aushan: ["Kaushan Script", "cursive"],
      solitreo: ["Solitreo", "cursive"],
    },
  },
  plugins: [],
};
