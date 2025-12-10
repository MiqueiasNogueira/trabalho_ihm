import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path'
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');


export default defineConfig({
  plugins: [react()],
  base: "/trabalho_ihm/",
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        404: resolve(__dirname, "index.html"),
      },
    },
  }
});