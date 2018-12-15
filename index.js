module.exports = function (variants) {
  return function ({ addUtilities }) {
    addUtilities({
      '[v-cloak] .v-cloak-block': { display: 'block' },
      '[v-cloak] .v-cloak-inline': { display: 'inline' },
      '[v-cloak] .v-cloak-inline-block': { display: 'inline-block' },
      '[v-cloak] .v-cloak-hidden': { display: 'none' },
      '[v-cloak] .v-cloak-invisible': { visibility: 'hidden' },
      '.v-cloak-block': { display: 'none' },
      '.v-cloak-inline': { display: 'none' },
    }, variants)
  }
}
