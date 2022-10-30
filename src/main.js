import { getOptions } from './options.js'

// On any new error, if `cause` has a `bugs`, it is re-appended to the end.
// `bugs` is set at instantiation time instead of during error handling as:
//   - This simplifies error handling logic
//   - This provides with better debugging and more immediate experience
const properties = function ({ error, options }) {
  return options === '' ? {} : { message: `${error.message}\n${options}` }
}

export default {
  name: 'bugs',
  getOptions,
  properties,
}
