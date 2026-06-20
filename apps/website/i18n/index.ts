import type { LocaleObject } from '@nuxtjs/i18n'

export type LocaleCode = LocaleObject['code']

export const APP_LOCALES: LocaleObject[] = [
  {
    code: 'en',
    language: 'en',
    file: 'en.json',
    name: 'English',
  },
]
