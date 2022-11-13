import test from 'ava'
import { each } from 'test-each'

import {
  BaseError,
  TEST_BUGS_URL,
  TEST_BUGS_STRING,
  TEST_MESSAGE,
} from './helpers/main.js'

test('bugs is shown in message', (t) => {
  const { message } = new BaseError(TEST_MESSAGE, { bugs: TEST_BUGS_URL })
  t.true(message.startsWith(TEST_MESSAGE))
  t.true(message.endsWith(TEST_BUGS_URL))
})

test('bugs is reflected in stack', (t) => {
  const { stack } = new BaseError(TEST_MESSAGE, { bugs: TEST_BUGS_URL })
  t.true(stack.includes(TEST_BUGS_URL))
})

each(
  ['', 'causeMessage'],
  ['', TEST_MESSAGE],
  ({ title }, causeMessage, parentMessage) => {
    test(`bugs is replaced when wrapped and overridden | ${title}`, (t) => {
      const cause = new BaseError(causeMessage, { bugs: TEST_BUGS_URL })
      const { message } = new BaseError(parentMessage, {
        cause,
        bugs: TEST_BUGS_STRING,
      })
      t.true(message.startsWith(causeMessage))
      t.true(message.includes(parentMessage))
      t.true(message.endsWith(TEST_BUGS_STRING))
      t.false(message.includes(TEST_BUGS_URL))
    })

    test(`bugs is bumped when wrapped but not overridden | ${title}`, (t) => {
      const cause = new BaseError(causeMessage, { bugs: TEST_BUGS_URL })
      const { message } = new BaseError(parentMessage, { cause })
      t.true(message.startsWith(causeMessage))
      t.true(message.includes(parentMessage))
      t.true(message.endsWith(TEST_BUGS_URL))
    })
  },
)
