import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6C5CE7",
          dark: "#5645d6",
          light: "#a29bfe"
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
