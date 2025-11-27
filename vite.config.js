import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


const repoName = 'trabalho_ihm';

export default defineConfig({
  plugins: [react()],


  base: `/${repoName}/`,

  build: {

    outDir: 'dist'
  }
});