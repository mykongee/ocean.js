import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';
// const modules = import.meta.glob('./src/components/**/*.js');

// Advanced Base Options?
// hash?

function getMultipleEntryFilePaths() {
  const filePaths = [
  ];
  const basePath = path.resolve(".");
  console.log(basePath);
}
// getMultipleEntryFilePaths();


const multipleEntryPoints = [
  path.resolve(__dirname, 'src/components/Button/Button.vue'),
  path.resolve(__dirname, 'src/components/HelloWorld/HelloWorld.vue'),
]

export default defineConfig({
  root: path.resolve("."),
  plugins: [vue()], 
  build: {
    minify: true,
    target: 'esnext',
    lib: {
        // entry:  path.resolve(__dirname, 'src/main.ts'),
        entry: multipleEntryPoints,
        name: 'Ocean',
        fileName: (format, entryName) => {
          return `pages/${entryName}/${entryName}.js`
        },
    },
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }  
})
