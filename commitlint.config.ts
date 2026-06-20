import type { UserConfig } from '@commitlint/types'
import { RuleConfigSeverity } from '@commitlint/types'

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
  },

  // Ignore dependabot commit messages.
  ignores: [(commit) => /^Bumps \[.+\]\(.+\) from .+ to .+\.$/m.test(commit)],

  prompt: {
    settings: {
      enableMultipleScopes: true,
    },
  },

  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
}

export default Configuration
