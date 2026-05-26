import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/presentations/20-engagement-vs-wedding-ring/presentation/",
  server: {
    port: 5174,
    fs: { allow: [".."] },
  },
});
