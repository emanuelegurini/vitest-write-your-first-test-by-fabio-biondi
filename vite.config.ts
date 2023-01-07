/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], // <==
    setupFiles: "./setupTests.ts", // <==
    coverage: {
      provider: "istanbul", // <==
    },
  },
  plugins: [react(), checker({ typescript: true })],
});
