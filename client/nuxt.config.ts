// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/main.css'],
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
    '@element-plus/nuxt',
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.STRAPI_BACKEND_URL,
      apiKey: process.env.STRAPI_API_KEY
    },
  },
  nitro: {
    alias: {
      pinia: 'pinia'
    }
  }
})
