import modernErrors from 'modern-errors'
import modernErrorsBugs from 'modern-errors-bugs'
import { expectType, expectError } from 'tsd'

const AnyError = modernErrors([modernErrorsBugs])
const error = new AnyError('', { cause: '' })

modernErrors([modernErrorsBugs], { bugs: 'https://example.com' })
modernErrors([modernErrorsBugs], { bugs: new URL('https://example.com') })
expectError(modernErrors([modernErrorsBugs], { bugs: true }))

expectType<string>(error.message)
