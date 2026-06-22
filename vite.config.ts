import { defineConfig } from 'vite-plus'
import lintRegexp from 'eslint-plugin-regexp'

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
    '*.{css,md}': 'vp format',
    '*.{css,vue}': ['vp run lint:style-fix'],
  },

  lint: {
    plugins: [
      'eslint',
      'oxc',
      'typescript',
      'unicorn',
      'jsdoc',
      'vue',
      'vitest',
    ],

    jsPlugins: [
      { name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' },
      '@e18e/eslint-plugin',
      'eslint-plugin-regexp',
    ],

    options: {
      typeAware: true,
      typeCheck: true,
    },

    categories: {
      correctness: 'error',
      suspicious: 'warn',
      perf: 'warn',
    },

    ignorePatterns: [
      '**/.nuxt/**',
      '**/.nitro/**',
      '**/.cache/**',
      '**/.data/**',
      '**/.output/**',
      '**/dist/**',
      '**/coverage/**',
      '**/reports/**',
      '**/playwright-report/**',
      '**/test-results/**',
      '**/logs/**',
      '**/*.log*',
      '**/.git/**',
      '**/.DS_Store/**',
      '**/node_modules/**',
      '**/.pnpm-store/**',
      '**/pnpm-lock.yaml',
      '**/.env',
      '**/.env.*',
      '**/.vercel/**',
      '**/.netlify/**',
    ],

    rules: {
      'vite-plus/prefer-vite-plus-imports': 'error',
      'no-console': 'warn',
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'no-await-in-loop': 'off',
      'no-restricted-globals': 'error',
      'typescript/consistent-type-imports': 'error',
      'typescript/no-empty-object-type': 'error',
      'unicorn/no-array-sort': 'off',
      'vitest/no-disabled-tests': 'error',
      'vitest/require-mock-type-parameters': 'off',
      // e18e
      'e18e/prefer-array-from-map': 'error',
      'e18e/prefer-timer-args': 'error',
      'e18e/prefer-date-now': 'error',
      'e18e/prefer-regex-test': 'error',
      'e18e/prefer-array-some': 'error',
      // RegExp - All rules.
      ...lintRegexp.configs.all.rules,
      // RegExp - Possible Errors.
      'regexp/no-empty-alternative': 'error',
      'regexp/no-lazy-ends': 'error',
      'regexp/no-potentially-useless-backreference': 'error',
      // RegExp - Best Practices.
      'regexp/no-octal': 'error',
      'regexp/no-standalone-backslash': 'error',
      'regexp/no-useless-flag': 'error',
    },
  },

  fmt: {
    printWidth: 80,
    semi: false,
    singleAttributePerLine: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'all',
    useTabs: false,
    vueIndentScriptAndStyle: true,

    ignorePatterns: [
      '**/.nuxt/**',
      '**/.nitro/**',
      '**/.cache/**',
      '**/.data/**',
      '**/.output/**',
      '**/dist/**',
      '**/coverage/**',
      '**/reports/**',
      '**/playwright-report/**',
      '**/test-results/**',
      '**/logs/**',
      '**/*.log*',
      '**/.git/**',
      '**/.DS_Store/**',
      '**/node_modules/**',
      '**/.pnpm-store/**',
      '**/pnpm-lock.yaml',
      '**/.env',
      '**/.env.*',
      '**/.vercel/**',
      '**/.netlify/**',
    ],

    overrides: [
      {
        files: ['./apps/cms/**'],
        experimentalTailwindcss: {
          stylesheet: './apps/cms/app/assets/styles/main.css',
        },
      },
      {
        files: ['./apps/website/**'],
        experimentalTailwindcss: {
          stylesheet: './apps/website/app/assets/styles/main.css',
        },
      },
    ],
  },

  test: {
    projects: ['**/vitest.config.ts'],
  },

  run: {
    cache: true,

    tasks: {
      'check-all': {
        command: 'vp check && vp run -r lint:style',
      },
    },
  },
})
