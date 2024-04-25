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
    baseURL: process.env.WORDPRESS_BACKEND,
    headers: {
      'Authorization': 'Basic ' + Buffer.from(`${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`).toString('base64'),
      'Content-Type': 'application/json',
    },
  },
  nitro: {
    alias: {
      pinia: 'pinia'
    }
  }
})
