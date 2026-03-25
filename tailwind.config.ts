import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter-tight)", "system-ui", "sans-serif"],
      },
      colors: {
        "film-bg":      "#0c0c0c",
        "film-surface": "#141414",
        "film-text":    "#f0ede8",   // warm off-white — not pure white
        "film-muted":   "#4a4a4a",
        "film-border":  "rgba(240,237,232,0.07)",
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%":  { transform: "translate(-2%,-3%)" },
          "20%":  { transform: "translate(3%,2%)" },
          "30%":  { transform: "translate(-1%,4%)" },
          "40%":  { transform: "translate(4%,-1%)" },
          "50%":  { transform: "translate(-3%,3%)" },
          "60%":  { transform: "translate(2%,-4%)" },
          "70%":  { transform: "translate(-4%,2%)" },
          "80%":  { transform: "translate(3%,-2%)" },
          "90%":  { transform: "translate(-2%,4%)" },
        },
      },
      animation: {
        grain: "grain 0.5s steps(2) infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({ ":root": newVars });
}

export default config;
