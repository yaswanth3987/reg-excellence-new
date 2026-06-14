import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['lucide-react'],
        },
      },
    },
    // Minify CSS
    cssMinify: true,
    // Inline small assets as base64
    assetsInlineLimit: 4096,
    // Enable source maps for debugging (disable in production)
    sourcemap: false,
    // Chunk size warning limit
    chunkSizeWarningLimit: 600,
  },
  // Optimise dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
  },
})
