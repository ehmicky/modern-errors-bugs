import test from 'ava'
import { each } from 'test-each'

import { BaseError, TEST_BUGS_URL, TEST_MESSAGE } from './helpers/main.js'

each([true, 'test', '//'], ({ title }, bugs) => {
  test(`bugs is validated | ${title}`, (t) => {
    // eslint-disable-next-line max-nested-callbacks
    t.throws(() => new BaseError('test', { bugs }))
  })
})

each([undefined, ''], ({ title }, bugs) => {
  test(`bugs is ignored if empty | ${title}`, (t) => {
    const { message } = new BaseError(TEST_MESSAGE, { bugs })
    t.is(message, TEST_MESSAGE)
  })
})

test('bugs can be a URL', (t) => {
  const { message } = new BaseError(TEST_MESSAGE, {
    bugs: new URL(TEST_BUGS_URL),
  })
  t.true(message.startsWith(TEST_MESSAGE))
  t.true(message.endsWith(TEST_BUGS_URL))
})
