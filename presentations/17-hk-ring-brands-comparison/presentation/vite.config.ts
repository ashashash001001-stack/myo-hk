import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/presentations/17-hk-ring-brands-comparison/presentation/",
  server: {
    port: 5174,
    fs: { allow: [".."] },
  },
});
