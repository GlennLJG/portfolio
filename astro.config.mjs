import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://glennljg.github.io',
  base: process.env.NODE_ENV === 'production' ? '/portfolio' : '/',
})
