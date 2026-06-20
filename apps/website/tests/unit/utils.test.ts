import { assert, describe, expect, it } from 'vite-plus/test'

describe('[website] Utility example test', () => {
  it('test pass', () => {
    expect.hasAssertions()
    assert.equal(Math.pow(2, 2), 4)
    expect(Math.sqrt(144)).toBe(12)
  })
})
