import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://glennljg.github.io',
  base: '/portfolio',
  output: 'static',
  trailingSlash: 'ignore'
});
