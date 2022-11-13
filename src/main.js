import { getOptions, BUGS_PREFIX } from './options.js'

const properties = function ({ error: { message }, options }) {
  const messageA = message.split('\n').filter(hasNoBugsUrl).join('\n')
  const messageB = options === '' ? messageA : `${messageA}\n${options}`
  return { message: messageB }
}

// When called multiple times, previous `bugs` lines are removed
const hasNoBugsUrl = function (line) {
  return !line.startsWith(BUGS_PREFIX)
}

export default {
  name: 'bugs',
  getOptions,
  properties,
}
