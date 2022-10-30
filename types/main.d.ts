import type { Info } from 'modern-errors'

/**
 * `modern-errors-bugs` plugin.
 *
 * This appends a bug reports URL to error messages.
 *
 * @example
 * ```js
 * export const UnknownError = AnyError.subclass('UnknownError', {
 *   bugs: 'https://github.com/my-name/my-project/issues',
 * })
 *
 * // Errors now include the following message:
 * // Please report this bug at: https://github.com/my-name/my-project/issues
 * ```
 */
declare const plugin: {
  name: 'bugs'
  getOptions: (input: string | URL) => string
  properties: (info: Info['properties']) => { message: string }
}
export default plugin
