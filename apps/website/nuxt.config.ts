import { APP_LOCALES } from './i18n'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@org/layer-core'],

  modules: [
    'nuxt-security',
    '@nuxtjs/robots',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    // '@nuxt/content',
    '@comark/nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/test-utils/module',
    '@nuxt/hints',
  ],

  /**
   * @see https://nuxt.com/docs/getting-started/upgrade
   */
  compatibilityDate: '2026-05-30',

  future: {
    compatibilityVersion: 5,
  },

  experimental: {
    nitroAutoImports: true,
  },

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
  },

  /**
   * @see https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
   */
  runtimeConfig: {
    public: {
      contact: {
        email: process.env.CONTACT_EMAIL,
      },
    },
  },

  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      charset: 'utf-8',
      htmlAttrs: {
        lang: process.env.NUXT_PUBLIC_LOCALE_DEFAULT || 'en',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
    },

    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  nitro: {
    vercel: {
      config: {
        bypassToken: process.env.VERCEL_BYPASS_TOKEN,
      },
    },
  },

  /**
   * @see https://i18n.nuxtjs.org/docs/getting-started/usage
   * @see https://ui.nuxt.com/docs/getting-started/integrations/i18n/nuxt
   */
  i18n: {
    defaultLocale: process.env.NUXT_PUBLIC_LOCALE_DEFAULT,
    locales: APP_LOCALES,
    strategy: 'prefix_except_default',
    // https://i18n.nuxtjs.org/docs/guide/server-side-translations
    experimental: {
      localeDetector: 'localeDetector.ts',
    },
  },

  /**
   * @see https://ui.nuxt.com/docs/getting-started/installation/nuxt#options
   */
  ui: {
    theme: {
      colors: ['neutral', 'primary', 'info', 'success', 'warning', 'error'],

      defaultVariants: {
        size: 'lg',
      },
    },
  },

  /**
   * @see https://ui.nuxt.com/docs/getting-started/integrations/fonts
   */
  fonts: {
    experimental: {
      disableLocalFallbacks: true,
    },
  },

  /**
   * @see https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt
   */
  icon: {
    mode: 'svg',
  },

  /**
   * @see https://nuxtseo.com/docs/robots/getting-started/installation#configuration
   */
  robots: {
    autoI18n: false,
    disallow:
      process.env.NODE_ENV !== 'production' &&
      process.env.NUXT_SITE_ENV !== 'production'
        ? '/'
        : '',
    // sitemap: `${process.env.NUXT_PUBLIC_APP_BASE_URL}/sitemap/index.xml`,
    blockNonSeoBots: true,
  },

  /**
   * @see https://nuxt-security.vercel.app/getting-started/configuration
   */
  security: {
    headers: {
      contentSecurityPolicy: {
        'base-uri': ["'self'"],
        'img-src': [
          "'self'",
          'data:',
          ...(process.env.NUXT_PUBLIC_STORAGE_BLOB_URL
            ? [process.env.NUXT_PUBLIC_STORAGE_BLOB_URL]
            : []),
        ],
      },
    },

    rateLimiter: {
      tokensPerInterval: 100,
      interval: 10000,
      headers: false,
      driver: {
        name: 'lruCache',
      },
      throwError: true,
    },
  },
})
