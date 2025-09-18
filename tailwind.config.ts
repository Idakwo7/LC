import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["var(--font-plus-jakarta-sans)", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
        creato: ["var(--font-creato-display)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

