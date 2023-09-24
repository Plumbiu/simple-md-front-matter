import { parseWithGoStyle } from '../index'
import { test, expect } from 'vitest'

test('base', () => {
  const md = `
---
foo: bar
baz: 14
---
# hello world
  `
  const fm = parseWithGoStyle(md)
  expect(fm.err).toEqual(null)
  expect(fm.content).toEqual({
    foo: 'bar',
    baz: 14,
  })
})

test('illeage syntax', () => {
  const md = `
--
foo: bar
baz: 14
--
# hello world
  `
  const fm = parseWithGoStyle(md)
  expect(fm.err).toBeTruthy()
  expect(fm.content).toEqual(undefined)
})

test('with string[] syntax', () => {
  const md = `
---
foo: bar
baz:
  - 12
  - 13
  - 14
---
# hello world
  `
  const fm = parseWithGoStyle(md)
  expect(fm.err).toEqual(null)
  expect(fm.content).toEqual({
    foo: 'bar',
    baz: [12, 13, 14],
  })
})
