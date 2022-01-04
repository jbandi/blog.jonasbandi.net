import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Jonas Blog',
  description: 'Blog of Jonas Bandi',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  ],
  vite: {
    build: {
      minify: 'terser'
    }
  }
})
