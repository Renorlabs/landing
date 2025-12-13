import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// Optional bundle analyzer - install with: npm install -D rollup-plugin-visualizer
// Then run: ANALYZE=true npm run build
function getVisualizerPlugin() {
  if (process.env.ANALYZE !== 'true') return null
  try {
    const { visualizer } = require('rollup-plugin-visualizer')
    return visualizer({
      open: true,
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true,
    })
  } catch {
    // Plugin not installed, skip
    return null
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    getVisualizerPlugin()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'animation-vendor': ['framer-motion', 'gsap', 'lenis'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
