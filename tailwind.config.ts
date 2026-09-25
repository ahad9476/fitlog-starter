import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0d0d0d",          // page background (near-black)
        surface: "#161616",     // card / panel background
        surface2: "#1f1f1f",    // slightly lighter panel (navbar, footer)
        border: "#2a2a2a",
        accent: "#ccff00",      // lime accent - Plan badge, CTA
        muted: "#9a9a9a",
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"], // headings
        body: ["var(--font-inter)", "sans-serif"],     // body text
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
