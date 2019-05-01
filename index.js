const _ = require('lodash')
const defaultOptions = require('./defaultOptions')

module.exports = ({ options = [] }) => ({ addUtilities }) => {
  const selectedOptions = !_.isEmpty(options)
    ? options
    : _.keys(defaultOptions)

  const utilities = _.chain(selectedOptions)
    .map(option => defaultOptions[option])
    .flattenDeep()

  addUtilities(utilities.value())
}
