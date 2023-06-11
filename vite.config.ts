import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/lotr-task/",
  build: {
    outDir: "dist", // Output directory for the production build
    rollupOptions: {
      input: "/public/index.html", // Entry point of your application
    },
  },
});
