import tailwind from 'tailwindcss'
import tailwindTypography from '@tailwindcss/typography'
import dracula from 'tailwind-dracula'

export default {
  plugins: [
    tailwind({
      content: ['./.vitepress/theme/**/*.vue'],
      plugins: [tailwindTypography, dracula]
    })
  ]
}

// export default {
//   plugins: [
//     tailwind({
//       content: ['./.vitepress/theme/**/*.vue'],
//       plugins: [tailwindTypography]
//     })
//   ]
// }

