module.exports = function (variants) {
  return function ({ addUtilities }) {
    addUtilities({
      '[v-cloak] .v-cloak-block': { display: 'block' },
      '[v-cloak] .v-cloak-flex': { display: 'flex' },
      '[v-cloak] .v-cloak-hidden': { display: 'none' },
      '[v-cloak] .v-cloak-inline': { display: 'inline' },
      '[v-cloak] .v-cloak-inline-block': { display: 'inline-block' },
      '[v-cloak] .v-cloak-inline-flex': { display: 'inline-flex' },
      '[v-cloak] .v-cloak-invisible': { visibility: 'hidden' },
      '.v-cloak-block, .v-cloak-flex, .v-cloak-inline, .v-cloak-inline-block, .v-cloak-inline-flex': { display: 'none' },
    }, variants)
  }
}
