import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        part1: './part-1/index.html',
        part2: './part-2/index.html',
        part3: './part-3/index.html',
        part4: './part-4/index.html',
        part5: './part-5/index.html',
        part6: './part-6/index.html',
        part7: './part-7/index.html'
      }
    }
  }
})