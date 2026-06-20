import type { NumberFormat } from '@intlify/core-base'
import type { LocaleCode } from './index'

const numberFormats: Record<LocaleCode, NumberFormat> = {
  en: {
    currency: {
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'narrowSymbol',
    },
  },
}

export default defineI18nConfig(() => ({
  numberFormats,
}))
