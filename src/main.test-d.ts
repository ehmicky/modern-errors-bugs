import ModernError from 'modern-errors'
import modernErrorsBugs from 'modern-errors-bugs'
import { expectType, expectError } from 'tsd'

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
expectError(
  ModernError.subclass('TestError', {
    plugins: [modernErrorsBugs],
    bugs: true,
  }),
)

expectType<string>(error.message)