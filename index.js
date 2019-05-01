const _ = require('lodash')
const defaultOptions = require('./defaultOptions')

module.exports = ({ options = [] }) => ({ addUtilities }) => {
  const selectedOptions = !_.isEmpty(options)
    ? options
    : _.keys(defaultOptions)

  addUtilities(_.chain(selectedOptions).map(option => {
    return defaultOptions[option]
  }).flattenDeep().value())
}
