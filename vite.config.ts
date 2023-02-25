import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    // Output compiled files to /dist.
    outDir: './dist',
    lib: {
      // Set the entry point (file that contains our components exported).
      entry: './src/main.ts',
      // Name of the library.
      name: 'vuedetails',
      // We are building for CJS and ESM, use a function to rename automatically files.
      // Example: my-component-library.esm.js
      // fileName: (format) => `${'vuedetails'}.${format}.js`,
      fileName: 'vuedetails',
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
