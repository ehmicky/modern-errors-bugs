import modernErrors from 'modern-errors'
import modernErrorsBugs from 'modern-errors-bugs'
import { expectType, expectError } from 'tsd'

const BaseError = modernErrors([modernErrorsBugs])
const error = new BaseError('', { cause: '' })

modernErrors([modernErrorsBugs], { bugs: 'https://example.com' })
modernErrors([modernErrorsBugs], { bugs: new URL('https://example.com') })
expectError(modernErrors([modernErrorsBugs], { bugs: true }))

expectType<string>(error.message)
