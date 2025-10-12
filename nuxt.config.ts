import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  modules: ['@nuxt/fonts', '@nuxt/content'],

  fonts: {
    families: [
      { name: 'BBH Sans Bartle', provider: 'google' },
      { name: 'IBM Plex Sans', provider: 'google' },
      { name: 'IBM Plex Mono', provider: 'google' }
    ]
  },
  content: {
    renderer: {
      anchorLinks: {
        h2: true,
        h3: true
      }
    },

    build: {
      markdown: {
        highlight: {
          theme: 'catppuccin-frappe'
        }
      }
    }
  }
})
