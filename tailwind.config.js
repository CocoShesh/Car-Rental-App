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
      },
    },
  },
  plugins: [require("daisyui")],
};
