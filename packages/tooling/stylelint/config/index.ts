import type { Config } from 'stylelint'

const configBase: Config = {
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'apply',
          'custom-variant',
          'plugin',
          'reference',
          'theme',
          'utility',
          'variant',
        ],
      },
    ],
    'import-notation': 'string',
    'custom-property-empty-line-before': null,
    'comment-empty-line-before': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['view-transition-old', 'view-transition-new'],
      },
    ],
  },
}

const configVue: Config = {
  ...configBase,
  extends: ['stylelint-config-standard', 'stylelint-config-standard-vue'],
}

export { configBase, configVue }
