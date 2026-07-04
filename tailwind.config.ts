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
        "dark-bg": "#0D0E1A",
        "dark-card": "rgba(255,255,255,0.03)",
        "dark-border": "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        heading: ["var(--font-syne)"],
        body: ["var(--font-dm-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
