import test from 'ava'
import { each } from 'test-each'

import { BaseError, TEST_BUGS_URL, TEST_MESSAGE } from './helpers/main.test.js'

each([true, '', 'test', '//'], ({ title }, bugs) => {
  test(`bugs is validated | ${title}`, (t) => {
    t.throws(() => new BaseError('test', { bugs }))
  })
})

each([undefined, {}, { bugs: undefined }], ({ title }, options) => {
  test(`bugs is ignored if empty | ${title}`, (t) => {
    t.is(new BaseError(TEST_MESSAGE, options).message, TEST_MESSAGE)
  })
})

test('bugs can be a URL', (t) => {
  const { message } = new BaseError(TEST_MESSAGE, {
    bugs: new URL(TEST_BUGS_URL),
  })
  t.true(message.startsWith(TEST_MESSAGE))
  t.true(message.endsWith(TEST_BUGS_URL))
})
