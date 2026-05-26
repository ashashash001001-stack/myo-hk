import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/presentations/03-wedding-cost-breakdown/presentation/",
  server: {
    port: 5174,
    fs: { allow: [".."] },
  },
});
