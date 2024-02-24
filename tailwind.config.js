/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: "#A259FF",
      },
      fontFamily: {
        "work-sans": ["Work Sans"],
        "space-mono": ["Space Mono"],
      },
      screens:{
        'md':{'min':'768px'},
        'msc':{'min':'834px'},
        'lg':{'min':'1024px'},
        'fs':{'min':'1280px'},
        'xl':{'min':'1440px'},
      },
    },
  },
  plugins: [],
};
