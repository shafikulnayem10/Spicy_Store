import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    outDir: 'dist'
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    headers: {
      'Content-Type': 'application/javascript'
    }
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
  }
});