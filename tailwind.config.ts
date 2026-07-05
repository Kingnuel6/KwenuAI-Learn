import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-purple": "#8B3CF7",
        "light-bg": "#F8F7FF",
        "light-text": "#0D0E1A",
        "light-text-secondary": "#6B6A80",
        "light-border": "#E8E5F0",
        "light-card": "#FFFFFF",
      },
      fontFamily: {
        heading: ["var(--font-poppins)"],
        body: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
