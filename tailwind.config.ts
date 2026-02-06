import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0a0a0a",
        "gray-900": "#1a1a1a",
        "gray-800": "#2a2a2a",
        "gray-700": "#3a3a3a",
        "blue-primary": "#0066cc",
        "green-accent": "#00c853",
        "orange-accent": "#ff6d00",
      },
    },
  },
  plugins: [],
};

export default config;
