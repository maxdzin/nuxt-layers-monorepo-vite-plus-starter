import { describe, expect, it } from 'vite-plus/test'

describe('[website] UI app config test', () => {
  it('provides ui color config', () => {
    // const config = useAppConfig()
    const config = {
      ui: {
        colors: {
          primary: 'green',
          neutral: 'slate',
        },
      },
    }

    expect(config.ui.colors.primary).toBe('green')
    expect(config.ui.colors.neutral).toBe('slate')
  })
})
