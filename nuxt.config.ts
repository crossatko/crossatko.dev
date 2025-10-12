import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'crossatko.dev',
      htmlAttrs: { lang: 'en' },
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon/favicon-96x96.png',
          sizes: '96x96'
        },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-touch-icon.png'
        },
        { rel: 'manifest', href: '/favicon/site.webmanifest' }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'apple-mobile-web-app-title', content: 'crossatko.dev' },
        {
          name: 'description',
          content: 'The personal website and blog of Atko'
        }
      ]
    }
  },

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
  },
  nitro: {
    preset: 'cloudflare_pages',
    prerender: {
      autoSubfolderIndex: false
    }
  }
})
