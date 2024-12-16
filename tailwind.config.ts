import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myPink:"#F98585",
        myBlack:"#background: #21243D",
        recentBackground:"#F4E2E2",
        footerBackground:"#FAF5F5",
        background: "#f6f0f0",
        heroElipse:"#dfd8d8",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
