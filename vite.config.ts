import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    fs: {
      strict: true,
      deny: [
        ".env",
        ".env.*",
        "**/.env",
        "**/.env.*",
        "*.{crt,pem,key,p12,pfx}",
        "**/.git/**",
        "**/.npmrc",
        "**/.netrc",
      ],
    },
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
});
