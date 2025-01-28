import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust the limit as needed
  },
};
