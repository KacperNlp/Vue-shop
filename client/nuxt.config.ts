// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['primevue/resources/themes/md-light-deeppurple/theme.css', '~/assets/styles/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/test-utils/module',
    'nuxt-icon',
    'nuxt-primevue'
  ],
  nitro: {
    alias: {
      pinia: 'pinia'
    }
  },
  primevue: {
    options: {
      importTheme: { from: '@/themes/mytheme.js' },
    }
  }
})
