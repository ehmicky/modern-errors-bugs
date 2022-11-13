import ModernError from 'modern-errors'
import modernErrorsBugs from 'modern-errors-bugs'

export const BaseError = ModernError.subclass('BaseError', {
  plugins: [modernErrorsBugs],
})

export const TEST_BUGS_URL = import.meta.url
export const TEST_BUGS_STRING = 'https://example.com/'
export const TEST_MESSAGE = 'testMessage'
