import test from 'ava'
import { each } from 'test-each'

import {
  AnyError,
  TestError,
  TEST_BUGS_URL,
  TEST_BUGS_STRING,
  TEST_MESSAGE,
} from './helpers/main.js'

test('bugs is shown in message', (t) => {
  const { message } = new TestError(TEST_MESSAGE, { bugs: TEST_BUGS_URL })
  t.true(message.startsWith(TEST_MESSAGE))
  t.true(message.endsWith(TEST_BUGS_URL))
})

test('bugs is reflected in stack', (t) => {
  const { stack } = new TestError(TEST_MESSAGE, { bugs: TEST_BUGS_URL })
  t.true(stack.includes(TEST_BUGS_URL))
})

test('bugs can be used by AnyError', (t) => {
  const { message } = new AnyError(TEST_MESSAGE, {
    cause: '',
    bugs: TEST_BUGS_URL,
  })
  t.true(message.startsWith(TEST_MESSAGE))
  t.true(message.endsWith(TEST_BUGS_URL))
})

each(
  [TestError, AnyError],
  ['', 'causeMessage'],
  ['', TEST_MESSAGE],
  // eslint-disable-next-line max-params
  ({ title }, ErrorClass, causeMessage, parentMessage) => {
    test(`bugs is replaced with parent using defined value | ${title}`, (t) => {
      const cause = new TestError(causeMessage, { bugs: TEST_BUGS_URL })
      const { message } = new ErrorClass(parentMessage, {
        cause,
        bugs: TEST_BUGS_STRING,
      })
      t.true(message.startsWith(causeMessage))
      t.true(message.includes(parentMessage))
      t.true(message.endsWith(TEST_BUGS_STRING))
      t.false(message.includes(TEST_BUGS_URL))
    })
  },
)

each(
  ['', 'causeMessage'],
  ['', TEST_MESSAGE],
  ({ title }, causeMessage, parentMessage) => {
    test(`bugs is removed with known parent using undefined value | ${title}`, (t) => {
      const cause = new TestError(causeMessage, { bugs: TEST_BUGS_URL })
      const { message } = new TestError(parentMessage, { cause })
      t.true(message.startsWith(causeMessage))
      t.true(message.includes(parentMessage))
      t.false(message.includes(TEST_BUGS_URL))
    })

    test(`bugs is bumped with AnyError using undefined value | ${title}`, (t) => {
      const cause = new TestError(causeMessage, { bugs: TEST_BUGS_URL })
      const { message } = new AnyError(parentMessage, { cause })
      t.true(message.startsWith(causeMessage))
      t.true(message.includes(parentMessage))
      t.true(message.endsWith(TEST_BUGS_URL))
    })
  },
)
