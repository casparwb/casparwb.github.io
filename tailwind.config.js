export default {
    plugins: [
      tailwind({
        content: ['./.vitepress/theme/**/*.vue'],
        plugins: [ require('tailwind-dracula')()]
      })
    ]
  }