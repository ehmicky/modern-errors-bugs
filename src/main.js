import { getOptions, BUGS_PREFIX } from './options.js'

const properties = ({ error: { message }, options }) => {
  if (options === undefined) {
    return {}
  }

  const messageA = message.split('\n').filter(hasNoBugsUrl).join('\n')
  return { message: `${messageA}\n${options}` }
}

// When called multiple times, previous `bugs` lines are removed
const hasNoBugsUrl = (line) => !line.startsWith(BUGS_PREFIX)

export default {
  name: 'bugs',
  getOptions,
  properties,
}
