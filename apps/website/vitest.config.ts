import { defineConfig } from 'vite-plus'
import { defineVitestProject } from '@nuxt/test-utils/config'

const rootDir = import.meta.dirname

export default defineConfig({
  test: {
    root: rootDir,

    projects: [
      {
        test: {
          name: 'website-unit',
          include: ['tests/unit/**/*.{test,spec}.ts'],
          environment: 'node',
        },
      },

      {
        test: {
          name: 'website-e2e',
          include: ['tests/e2e/**/*.{test,spec}.ts'],
          environment: 'node',
        },
      },

      await defineVitestProject({
        test: {
          name: 'website-nuxt',
          include: ['tests/nuxt/**/*.{test,spec}.ts'],
          environment: 'nuxt',
          environmentOptions: {
            nuxt: {
              rootDir,
            },
          },
          hookTimeout: 60_000,
        },
      }),
    ],
  },
})
