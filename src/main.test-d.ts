import ModernError from 'modern-errors'
import { expectType } from 'tsd'

import modernErrorsBugs from 'modern-errors-bugs'

const BaseError = ModernError.subclass('BaseError', {
  plugins: [modernErrorsBugs],
})
const error = new BaseError('')

ModernError.subclass('TestError', {
  plugins: [modernErrorsBugs],
  bugs: 'https://example.com',
})
ModernError.subclass('TestError', {
  plugins: [modernErrorsBugs],
  bugs: new URL('https://example.com'),
})
// @ts-expect-error
ModernError.subclass('TestError', { plugins: [modernErrorsBugs], bugs: true })

expectType<string>(error.message)
