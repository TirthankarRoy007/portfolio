import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#082f3b",
        muted: "#6b7b8c",
        line: "#d8e5ef",
        brand: "#2f9aa7",
        accent: "#f26a41",
        surface: "#f6f7fb",
        mint: "#c6eef8",
        coral: "#ffe8dd"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(23, 32, 42, 0.08)",
        glow: "0 24px 70px rgba(23, 107, 135, 0.18)"
      }
    }
  },
  plugins: []
} satisfies Config;
