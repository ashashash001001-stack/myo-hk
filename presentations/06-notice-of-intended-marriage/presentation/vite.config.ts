import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/presentations/06-notice-of-intended-marriage/presentation/",
  server: {
    port: 5174,
    fs: { allow: [".."] },
  },
});
