// If defined, the `bugs` option prints a line recommending to report the error.
// The option value can be the `bugs.url` field of `package.json`, which is
// easier to retrieve with JSON imports (Node >=16.14.0)
export const getOptions = function (bugs = '') {
  return bugs === '' ? bugs : `${BUGS_PREFIX}${ensureBugsUrl(bugs)}`
}

export const BUGS_PREFIX = 'Please report this bug at: '

// We enforce `bugs` is a valid URL.
//  - Some terminals add links to URL, which makes it useful
const ensureBugsUrl = function (bugs) {
  if (Object.prototype.toString.call(bugs) === '[object URL]') {
    return bugs
  }

  if (typeof bugs !== 'string') {
    throw new TypeError(`It must be a string or a URL: ${bugs}`)
  }

  try {
    return new URL(bugs)
  } catch (error) {
    throw new TypeError(
      `It must not be "${bugs}" but ${getUrlError(error, bugs)}`,
    )
  }
}

const getUrlError = function (error, bugs) {
  try {
    // eslint-disable-next-line no-new
    new URL(bugs, EXAMPLE_ORIGIN)
    return 'an absolute URL.'
  } catch {
    return `a valid URL: ${error.message}.`
  }
}

const EXAMPLE_ORIGIN = 'https://example.com'
