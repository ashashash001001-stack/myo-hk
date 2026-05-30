import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/presentations/32-shang-tou-ceremony/presentation/",
  server: {
    port: 5174,
    fs: { allow: [".."] },
  },
});
