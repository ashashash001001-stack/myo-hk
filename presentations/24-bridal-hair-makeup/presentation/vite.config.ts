import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/presentations/24-bridal-hair-makeup/presentation/",
  server: {
    port: 5174,
    fs: { allow: [".."] },
  },
});
