import { assert, expect, test } from 'vitest'

// Edit an assertion and save to see HMR in action

test('Math.sqrt()', () => {
  expect(Math.sqrt(4)).toBe(2)
  expect(Math.sqrt(144)).toBe(12)
  expect(Math.sqrt(2)).toBe(Math.SQRT2)
})

test('JSON', () => {
  const input = {
    foo: 'hello',
    bar: 'world',
  }

  const output = JSON.stringify(input)

  expect(output).eq('{"foo":"hello","bar":"world"}')
  assert.deepEqual(JSON.parse(output), input, 'matches original')
})

const arr1 = [
  { 'a': 1, 'b': 0, 'c': 0 },
  { 'a': 0, 'b': 1, 'c': 0 },
  { 'a': 0, 'b': 0, 'c': 1 },
]

test('name', () => {
  expect(arr1[0]['a']).eq(1)
  expect(arr1[1]['b']).eq(1)
  expect(arr1[2]['c']).eq(1)

  expect(arr1.reduce((p, v) => v))
    .eq({ 'a': 0, 'b': 0, 'c': 1 })
})