/** Color a partir de una variable CSS con canales RGB (definidas en src/styles/index.css). */
const token = (name) => `rgb(var(--color-${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: token("ink"),
        muted: token("muted"),
        sand: {
          50: token("sand-50"),
          200: token("sand-200"),
          300: token("sand-300"),
          400: token("sand-400"),
        },
        gold: {
          300: token("gold-300"),
          600: token("gold-600"),
          700: token("gold-700"),
        },
      },
    },
  },
  plugins: [],
};
