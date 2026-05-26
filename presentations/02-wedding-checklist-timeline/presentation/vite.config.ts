import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/presentations/02-wedding-checklist-timeline/presentation/",
  server: {
    port: 5174,
    fs: { allow: [".."] },
  },
});
