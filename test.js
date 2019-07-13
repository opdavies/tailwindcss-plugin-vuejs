const cssMatcher = require('jest-matcher-css')
const plugin = require('./index.js')
const { generateUtilities } = require('tailwindcss-plugin-test-helpers')

expect.extend({
  toMatchCss: cssMatcher,
})

test('it generates block classes', () => {
  const output = `
    [v-cloak] .v-cloak-block {
      display: block
    }

    .v-cloak-block {
      display: none
    }
  `

  generateUtilities(plugin, { options: ['block'] }).then(result => {
    expect(result.css).toMatchCss(output)
    expect(result.warnings().length).toBe(0)
  })
})

test('it generates hidden classes', () => {
  const output = `
    [v-cloak] .v-cloak-hidden {
      display: none
    }
  `

  generateUtilities(plugin, { options: ['hidden'] }).then(result => {
    expect(result.css).toMatchCss(output)
    expect(result.warnings().length).toBe(0)
  })
})

test('it generates flex classes', () => {
  const output = `
    [v-cloak] .v-cloak-flex {
      display: flex
    }

    .v-cloak-flex {
      display: none
    }
  `

  generateUtilities(plugin, { options: ['flex'] }).then(result => {
    expect(result.css).toMatchCss(output)
    expect(result.warnings().length).toBe(0)
  })
})

test('it generates inline classes', () => {
  const output = `
    [v-cloak] .v-cloak-inline {
      display: inline
    }

    .v-cloak-inline {
      display: none
    }
  `

  generateUtilities(plugin, { options: ['inline'] }).then(result => {
    expect(result.css).toMatchCss(output)
    expect(result.warnings().length).toBe(0)
  })
})

test('it generates inline block classes', () => {
  const output = `
    [v-cloak] .v-cloak-inline-block {
      display: inline-block
    }

    .v-cloak-inline-block {
      display: none
    }
  `

  generateUtilities(plugin, { options: ['inline-block'] }).then(result => {
    expect(result.css).toMatchCss(output)
    expect(result.warnings().length).toBe(0)
  })
})

test('it generates inline flex classes', () => {
  const output = `
    [v-cloak] .v-cloak-inline-flex {
      display: inline-flex
    }

    .v-cloak-inline-flex {
      display: none
    }
  `

  generateUtilities(plugin, { options: ['inline-flex'] }).then(result => {
    expect(result.css).toMatchCss(output)
    expect(result.warnings().length).toBe(0)
  })
})

test('it generates invisible classes', () => {
  const output = `
    [v-cloak] .v-cloak-invisible {
      visibility: hidden
    }
  `

  generateUtilities(plugin, { options: ['invisible'] }).then(result => {
    expect(result.css).toMatchCss(output)
    expect(result.warnings().length).toBe(0)
  })
})
