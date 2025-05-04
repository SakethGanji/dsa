import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }) // opens report after build
  ],
  resolve: {
    alias: {
      // Force static export map to enable better tree-shaking
      '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Optional: put Tabler icons in their own chunk
          tabler: ['@tabler/icons-react'],
        },
      },
    },
  },
});
