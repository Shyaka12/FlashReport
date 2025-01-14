import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    base: "/FlashReport/",
    alias: {
      "@fortawesome": "/node_modules/@fortawesome",
    },
  },
});
