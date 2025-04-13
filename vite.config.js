import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Quitar la configuración externa para permitir que FontAwesome se incluya en el bundle
    }
  }
})
