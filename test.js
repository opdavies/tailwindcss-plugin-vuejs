const cssMatcher = require('jest-matcher-css')
const defaultConfig = require('tailwindcss/defaultConfig')
const plugin = require('./index.js')
const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

function run(options = {}) {
  return postcss(
    tailwindcss({
      corePlugins: false,
      plugins: [plugin(options)],
    })
  )
  .process('@tailwind utilities;', {
    from: undefined,
  })
}

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

  run({ options: ['block'] }).then(result => {
    expect(result.css).toMatchCss(output)
  })
})

test('it generates hidden classes', () => {
  const output = `
    [v-cloak] .v-cloak-hidden {
      display: none
    }
  `

  run({ options: ['hidden'] }).then(result => {
    expect(result.css).toMatchCss(output)
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

  run({ options: ['flex'] }).then(result => {
    expect(result.css).toMatchCss(output)
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

  run({ options: ['inline'] }).then(result => {
    expect(result.css).toMatchCss(output)
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

  run({ options: ['inline-block'] }).then(result => {
    expect(result.css).toMatchCss(output)
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

  run({ options: ['inline-flex'] }).then(result => {
    expect(result.css).toMatchCss(output)
  })
})

test('it generates invisible classes', () => {
  const output = `
    [v-cloak] .v-cloak-invisible {
      visibility: hidden
    }
  `

  run({ options: ['invisible'] }).then(result => {
    expect(result.css).toMatchCss(output)
  })
})
