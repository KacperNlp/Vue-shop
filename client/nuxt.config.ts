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
  axios: {
    baseURL: process.env.STRAPI_BACKEND_URL,
    headers: {
      'Authorization': 'bearer ' + process.env.STRAPI_API_KEY,
      'Content-Type': 'application/json',
    },
  },
  nitro: {
    alias: {
      pinia: 'pinia'
    }
  }
})
