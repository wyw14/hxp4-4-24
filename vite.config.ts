import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  server: {
    port: 5124,
    strictPort: true,
    open: true
  }
});