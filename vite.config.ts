import { defineConfig } from 'vite'
import fixReactVirtualized from 'esbuild-plugin-react-virtualized' // https://github.com/bvaughn/react-virtualized/issues/1722
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Tanks/",
  optimizeDeps: {
    esbuildOptions: {
      plugins: [fixReactVirtualized],
    },
  },
})
