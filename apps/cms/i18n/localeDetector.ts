export default defineI18nLocaleDetector((event, config) => {
  /**
   * Try to detect the locale from various sources: first, from query, then from
   * cookies, and then from header (`accept-header`).
   * Also, return the `defaultLocale` value of the locale config as a fallback.
   *
   * When using `try...Locale` function, disable locale default value with
   * `lang` option.
   */
  return (
    (
      tryQueryLocale(event, { lang: '' }) ||
      tryCookieLocale(event, { lang: '', name: 'i18n_locale' }) ||
      tryHeaderLocale(event, { lang: '' })
    )?.toString() || config.defaultLocale
  )
})
