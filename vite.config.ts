import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/lotr-task/",
  build: {
    outDir: "docs",
    assetsDir: "assets", // Specify the assets directory
    rollupOptions: {
      input: {
        index: "/index.html",
      },
    },
  },
});
