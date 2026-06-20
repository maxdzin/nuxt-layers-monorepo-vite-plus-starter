import { LogLevels } from 'consola'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $meta: { name: 'core' },

  modules: ['@nuxt/image', '@nuxt/test-utils/module'],

  devtools: { enabled: true },

  compatibilityDate: '2026-05-30',

  future: {
    compatibilityVersion: 5,
  },

  runtimeConfig: {
    public: {
      app: {
        env: process.env.VERCEL_ENV || process.env.NODE_ENV,
      },

      logger: {
        level:
          (process.env.NUXT_PUBLIC_LOGGER_LEVEL &&
            parseInt(process.env.NUXT_PUBLIC_LOGGER_LEVEL)) ||
          LogLevels.debug,
      },
    },
  },
})
