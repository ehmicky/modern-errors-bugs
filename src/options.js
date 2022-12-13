// If defined, the option prints a line recommending to report the error.
// The option value can be the `bugs.url` field of `package.json`, which is
// easier to retrieve with JSON imports (Node >=16.14.0)
export const getOptions = (options) =>
  options === undefined ? options : `${BUGS_PREFIX}${ensureBugsUrl(options)}`

export const BUGS_PREFIX = 'Please report this bug at: '

// We enforce `options` is a valid URL.
//  - Some terminals add links to URL, which makes it useful
const ensureBugsUrl = (options) => {
  if (Object.prototype.toString.call(options) === '[object URL]') {
    return options
  }

  validateBugsString(options)

  try {
    return new URL(options)
  } catch (error) {
    throw new TypeError(
      `It must not be "${options}" but ${getUrlError(error, options)}`,
    )
  }
}

const validateBugsString = (options) => {
  if (typeof options !== 'string') {
    throw new TypeError(`It must be a string or a URL: ${options}`)
  }

  if (options === '') {
    throw new TypeError('It must not be an empty string')
  }
}

const getUrlError = (error, options) => {
  try {
    // eslint-disable-next-line no-new
    new URL(options, EXAMPLE_ORIGIN)
    return 'an absolute URL.'
  } catch {
    return `a valid URL: ${error.message}.`
  }
}

const EXAMPLE_ORIGIN = 'https://example.com'
