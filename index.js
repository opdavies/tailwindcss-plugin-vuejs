const _ = require('lodash')

const defaultOptions = {
  block: {
    '[v-cloak] .v-cloak-block': { display: 'block' },
    '.v-cloak-block': { display: 'none' }
  },
  flex: {
    '[v-cloak] .v-cloak-flex': { display: 'flex' },
    '.v-cloak-flex': { display: 'none' }
  },
  hidden: {
    '[v-cloak] .v-cloak-hidden': { display: 'none' }
  },
  inline: {
    '[v-cloak] .v-cloak-inline': { display: 'inline' },
    '.v-cloak-inline': { display: 'none' }
  },
  'inline-block': {
    '[v-cloak] .v-cloak-inline-block': { display: 'inline-block' },
    '.v-cloak-inline-block': { display: 'none' }
  },
  'inline-flex': {
    '[v-cloak] .v-cloak-inline-flex': { display: 'inline-flex' },
    '.v-cloak-inline-flex': { display: 'none' }
  },
  invisible: {
    '[v-cloak] .v-cloak-invisible': { visibility: 'hidden' }
  }
}

module.exports = ({ options = [] }) => ({ addUtilities }) => {
  const selectedOptions = !_.isEmpty(options)
    ? options
    : _.keys(defaultOptions)

  addUtilities(_.chain(selectedOptions).map(option => {
    return defaultOptions[option]
  }).flattenDeep().value())
}
