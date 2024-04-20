/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "359px",
        "3xl": "2000px",
      },
      backgroundImage: {
        login: "url('/images/login-illustrator.png')",
        "header-overlay":
          "url(https://car-rental-ten.vercel.app/static/media/heroes-bg.71ab9a13d73de3860763.png)",
      },
    },
  },
  plugins: [require("daisyui")],
};
