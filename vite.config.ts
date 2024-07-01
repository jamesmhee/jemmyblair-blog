import MillionLint from "@million/lint";
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc'; // Import the react plugin

export default defineConfig({
  plugins: [
    react(), // Include the react plugin
    MillionLint.vite() // Include the MillionLint plugin
  ],
  define: {
    __APP_ENV__: process.env.VITE_VERCEL_ENV,
  },
});
