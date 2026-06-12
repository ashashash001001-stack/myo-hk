import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/presentations/28-wedding-photo-shotlist/presentation/",
  server: {
    port: 5174,
    fs: { allow: [".."] },
  },
});
