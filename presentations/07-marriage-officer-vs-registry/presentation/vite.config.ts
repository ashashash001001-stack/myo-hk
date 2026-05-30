import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/presentations/07-marriage-officer-vs-registry/presentation/",
  server: {
    port: 5174,
    fs: { allow: [".."] },
  },
});
