import { defineConfig } from 'vite-plus'
import { defineVitestProject } from '@nuxt/test-utils/config'

const rootDir = import.meta.dirname

export default defineConfig({
  test: {
    root: rootDir,

    projects: [
      {
        test: {
          name: 'cms-unit',
          include: ['tests/unit/**/*.{test,spec}.ts'],
          environment: 'node',
        },
      },

      {
        test: {
          name: 'cms-e2e',
          include: ['tests/e2e/**/*.{test,spec}.ts'],
          environment: 'node',
        },
      },

      await defineVitestProject({
        test: {
          name: 'cms-nuxt',
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
