import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { resolve, join } from 'path'


const root = join(process.cwd(), './src');

export default defineConfig({
  publicDir: 'src/public',
  plugins: [react(),],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, root),
      "@src": resolve(__dirname, `./src`),
      '/node_modules/': path.resolve(__dirname, 'node_modules/'),
      "@wikijump": resolve(__dirname, 'modules/'),
    },
  },
})