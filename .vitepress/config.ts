import { defineConfig } from 'vitepress'
import { genFeed } from './genFeed.js'

export default defineConfig({
  title: 'Caspar W. Bruenech',
  description: 'A site where I might, or might not, write about things I find interesting.',
  cleanUrls: true,
  head: [
    // ['meta', { name: 'twitter:site', content: '@vuejs' }],
    // ['meta', { name: 'twitter:card', content: 'summary' }],
    // [
    //   'meta',
    //   {
    //     name: 'twitter:image',
    //     content: 'https://vuejs.org/images/logo.png'
    //   }
    // ],
    // [
    //   'link',
    //   {
    //     rel: 'icon',
    //     type: 'image/x-icon',
    //     href: '/favicon.ico'
    //   }
    // ],
    // [
    //   'script',
    //   {
    //     src: 'https://cdn.usefathom.com/script.js',
    //     'data-site': 'NYHGSGQV',
    //     'data-spa': 'auto',
    //     defer: ''
    //   }
    // ]
  ],
  buildEnd: genFeed
})
