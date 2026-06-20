import { join as pathJoin } from 'node:path'
import { defineConfig } from 'vite-plus'
import { defineVitestProject } from '@nuxt/test-utils/config'

const rootDir = pathJoin(import.meta.dirname, './.playground')

export default defineConfig({
  test: {
    root: rootDir,

    projects: [
      {
        test: {
          name: 'layer-core-unit',
          include: ['tests/unit/**/*.{test,spec}.ts'],
          environment: 'node',
        },
      },

      {
        test: {
          name: 'layer-core-e2e',
          include: ['tests/e2e/**/*.{test,spec}.ts'],
          environment: 'node',
        },
      },

      await defineVitestProject({
        test: {
          name: 'layer-core-nuxt',
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
