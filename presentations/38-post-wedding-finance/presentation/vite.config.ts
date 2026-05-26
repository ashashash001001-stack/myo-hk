import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/presentations/38-post-wedding-finance/presentation/",
  server: {
    port: 5174,
    fs: { allow: [".."] },
  },
});
