// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
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
    "@stefanobartoletti/nuxt-social-share",
    "@nuxt/image"
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.STRAPI_BACKEND_URL,
      apiKey: process.env.STRAPI_API_KEY,
      uploadUrl: process.env.BACKEND_UPLOAD_URL,
      stripeKey: process.env.STRIPE_API_KEY
    },
  },
  nitro: {
    alias: {
      pinia: 'pinia'
    }
  },
  image: {
    strapi: {
      baseURL: process.env.BACKEND_UPLOAD_URL
    },
  }
})