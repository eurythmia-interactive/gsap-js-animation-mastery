import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        part1: './part-1/index.html',
        part2: './part-2/index.html'
      }
    }
  }
})