import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/presentations/36-anniversary-gift-guide/presentation/",
  server: {
    port: 5174,
    fs: { allow: [".."] },
  },
});
