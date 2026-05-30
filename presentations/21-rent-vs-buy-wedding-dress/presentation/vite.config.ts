import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/presentations/21-rent-vs-buy-wedding-dress/presentation/",
  server: {
    port: 5174,
    fs: { allow: [".."] },
  },
});
