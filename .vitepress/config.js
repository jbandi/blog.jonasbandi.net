import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Jonas Blog',
  description: 'Blog of Jonas Bandi',
  banner: '/images/vite.png',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    // [
    //   'meta',
    //   {
    //     property: 'og:image',
    //     content: '/jb.png'
    //   }
    // ],
    // [
    //   'meta',
    //   {
    //     property: 'twitter:image',
    //     content: '/jb.png'
    //   }
    // ]
  ],
  vite: {
    assetsInclude: ['**/*.jpg'],
    build: {
      minify: 'terser'
    }
  }
})
