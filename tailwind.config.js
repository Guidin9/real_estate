/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f7fb",
          100: "#e6f0f8",
          200: "#c9deef",
          300: "#9fc3e2",
          400: "#6aa0cf",
          500: "#477fb8",
          600: "#35639b",
          700: "#2b4f7d",
          800: "#244063",
          900: "#1f3550",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};

