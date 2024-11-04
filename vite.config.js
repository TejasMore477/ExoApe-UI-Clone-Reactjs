import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,        // Allow access from all network interfaces
    port: 5173,        // Explicitly set the port
  }
})
