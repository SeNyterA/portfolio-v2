import path from 'path'
import terser from '@rollup/plugin-terser'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import string from 'vite-plugin-string'

export default defineConfig({
  plugins: [
    react(),
    terser(),
    string({
      include: '**/*.glsl'
    })
  ],
  server: {
    port: 8440
  },
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: id => {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString()
          }
        }
      }
    }
  }
})
