import modernErrors from 'modern-errors'
import modernErrorsBugs from 'modern-errors-bugs'

export const AnyError = modernErrors([modernErrorsBugs])
AnyError.subclass('UnknownError')
export const TestError = AnyError.subclass('TestError')

export const TEST_BUGS_URL = import.meta.url
export const TEST_BUGS_STRING = 'https://example.com/'
export const TEST_MESSAGE = 'testMessage'
