import parse from '../index'
import { test, expect } from 'vitest'

test('base', () => {
  const md = `
---
foo: bar
baz: 14
---
# hello world
  `
  expect(parse(md)).toEqual({
    foo: 'bar',
    baz: 14,
  })
})
