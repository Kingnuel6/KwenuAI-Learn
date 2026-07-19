import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-purple": "#92278F",
        "brand-purple-tint": "#F5E9F5",
        "light-bg": "#F8F7FF",
        "light-text": "#0D0E1A",
        "light-text-secondary": "#6B6A80",
        "light-text-muted": "#9896B0",
        "light-border": "#E8E5F0",
        "light-card": "#FFFFFF",
        "badge-article-bg": "#E6F1FB",
        "badge-article-text": "#0C447C",
        "badge-video-bg": "#FAECE7",
        "badge-video-text": "#712B13",
        "badge-tool-bg": "#E1F5EE",
        "badge-tool-text": "#085041",
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
