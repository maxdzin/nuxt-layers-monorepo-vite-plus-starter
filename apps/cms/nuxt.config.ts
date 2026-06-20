import { APP_LOCALES } from './i18n'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@org/layer-core'],

  modules: [
    // '@nuxthub/core',
    'nuxt-auth-utils',
    'nuxt-security',
    '@nuxtjs/robots',
    '@pinia/nuxt',
    '@nuxt/ui',
    // '@nuxt/content',
    '@comark/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/test-utils/module',
    // '@nuxt/hints',
    // '@nuxt/a11y',
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

  ssr: false,

  routeRules: {
    '/api/**': { cors: true },

    '/auth/**': { appLayout: 'auth' },
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

    session: {
      password: process.env.NUXT_SESSION_PASSWORD!,
      maxAge: 60 * 60 * 24 * 7, // 1 week
      cookie: {
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
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
      title: process.env.NUXT_PUBLIC_APP_NAME,
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
    strategy: 'no_prefix',
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
   * @see https://nuxtseo.com/docs/robots/guides/disable-indexing
   */
  site: {
    indexable: false,
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
