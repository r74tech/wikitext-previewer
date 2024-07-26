import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { resolve, join } from 'path'
import bundledWorker from './plugins/vite-plugin-bundled-worker';


const root = join(process.cwd(), './src');

export default defineConfig({
  mode: process.env.MODE,
  base: '/',
  root: root,
  publicDir: "./public",
  plugins: [
    react(),
    bundledWorker(),
  ],
  server: {
    port: 3000,
    fs: {
      strict: false,
      allow: ['./'],
    },
    hmr: false,
  },
  build: {
    target: 'es2020',
    minify: process.env.MODE === 'development' ? false : 'terser',
    base: '/',
    outDir: join(process.cwd(), 'dist'),
    rollupOptions: {
      input: {
        main: resolve(__dirname, root, 'index.html'),
      },
      external: [
        /^virtual:.*/,
      ]
    },
    assetsDir: '.',
    emptyOutDir: true,
    sourcemap: true,
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