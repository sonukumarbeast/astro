import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  compressHTML: false,
  trailingSlash: 'ignore', //'ignore' | 'always' | 'never'
  build: {
    format: 'preserve'
  },
  prefetch: {
    prefetchAll: true
  },
  devToolbar: {
    enabled: false
  }
})
