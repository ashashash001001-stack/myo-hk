import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/presentations/10-name-change-after-marriage/presentation/",
  server: {
    port: 5174,
    fs: { allow: [".."] },
  },
});
