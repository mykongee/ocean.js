import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

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
  path.resolve(__dirname, 'src/components/OceanButton/OceanButton.vue'),
  path.resolve(__dirname, 'src/components/HelloWorld/HelloWorld.vue'),
]

const pageNames = [
  'OceanButton', 'HelloWorld'
]

export default defineConfig({
  root: path.resolve("."),
  plugins: [
    vue(),
    cssInjectedByJsPlugin(),
  ], 
  css: {
    devSourcemap: true,
  },
  build: {
    minify: true,
    target: 'es2019',
    sourcemap: true,
    // cssCodeSplit: false,
    outDir: 'dist',
    lib: {
        // entry:  path.resolve(__dirname, 'src/main.ts'),
        name: 'Ocean', 
        entry: multipleEntryPoints,
        formats: ['es'],
        fileName: (format, entryName) => {
          return `pages/${entryName}/${entryName}.js`
        },
      },
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      external: ['vue'],
      output: {
        // preserveModules: true, <--- TODO: research later
        globals: {
          vue: 'Vue'
        },
        entryFileNames: `pages/[name]/[name].js`,
        chunkFileNames: `pages/[name]/[name].[hash].js`,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return `${pageNames[1]}/index.[hash].css`;
        }
      }
    },
  }  
})
