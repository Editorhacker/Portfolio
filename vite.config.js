import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      // PNG: compress aggressively
      png: { quality: 80 },
      // JPEG: balance quality vs size
      jpeg: { quality: 75 },
      jpg: { quality: 75 },
      // WebP: most efficient format
      webp: { lossless: false, quality: 80 },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Prevent inlining large assets as base64
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        // Split vendor chunks for better caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion-vendor': ['framer-motion', 'motion'],
          'lenis-vendor': ['lenis'],
        },
      },
    },
  },
})