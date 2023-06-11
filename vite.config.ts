import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/lotr-task/", // Set the base path for deployment
  plugins: [react()],
});
