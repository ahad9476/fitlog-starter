import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0f1115",          
        surface: "#15171d",     
        surface2: "#1b1f28", 
        border: "#2d313b",
        accent: "#c2f800",    
        muted: "#8a92a0",
      },
      fontFamily: {
        display: ["var(--font-inter)", "sans-serif"], 
        body: ["var(--font-inter)", "sans-serif"],  
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};
export default config;
