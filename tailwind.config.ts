import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",   // revisa tu estructura real
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",   // para App Router
    "./pages/**/*.{ts,tsx,js,jsx}", // para Pages Router
  ],
  theme: {
    extend: {
      colors: {
        darkWood: "#3b2f2f",        // tu color personalizado
      },
    },
  },
  plugins: [],
};

export default config;
