import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'


// https://vitejs.dev/config/
//export default defineConfig({
 //plugins: [react()],
//})

export default {
  plugins: [reactRefresh()],
  server: {
    hmr: {
      port: 443,
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
}
