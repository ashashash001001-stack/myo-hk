import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/presentations/09-marriage-legal-property/presentation/",
  server: {
    port: 5174,
    fs: { allow: [".."] },
  },
});
