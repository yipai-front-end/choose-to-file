import { defineConfig } from 'vite'

import dts from 'vite-plugin-dts'
export default defineConfig({
  plugins: [dts()],
  build: {
    minify: false, //压缩
    rollupOptions: {
      output: [
        {
          format: 'es', // 打包格式
          entryFileNames: '[name].mjs', // 打包后文件名
          preserveModules: true, // 让打包目录和我们目录对应
          dir: './dist', // 配置打包根目录
        },
      ],
    },
    lib: {
      entry:'./source/index.ts'
    },
  },
})
