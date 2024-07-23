import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Site",
  description: "A site where I might, or might not, write about things I find interesting.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About me', link: '/about-me' },
      { text: 'Posts', link: '/posts' }
    ],

    sidebar: [
      {
        text: 'Posts',
        items: [
          { text: 'First post', link: '/2024-07-18-this-blog' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/casparwb' }
    ]
  }
})
