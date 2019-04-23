const _ = require('lodash')
const cssMatcher = require('jest-matcher-css')
const defaultConfig = require('tailwindcss/defaultConfig')
const plugin = require('./index.js')
const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

const generatePluginCss = (options = {}) => {
  return postcss(
    tailwindcss({
      corePlugins: false,
      plugins: [plugin(options)],
    })
  )
  .process('@tailwind utilities;', {
    from: undefined,
  })
  .then(result => {
    return result.css;
  })
};

expect.extend({
  toMatchCss: cssMatcher,
})

test('it generates block classes', () => {
  return generatePluginCss({ options: ['block'] }).then(css => {
    expect(css).toMatchCss(`
      [v-cloak] .v-cloak-block {
        display: block
      }

      .v-cloak-block {
        display: none
      }
    `)
  })
})

test('it generates hidden classes', () => {
  return generatePluginCss({ options: ['hidden'] }).then(css => {
    expect(css).toMatchCss(`
      [v-cloak] .v-cloak-hidden {
        display: none
      }
    `)
  })
})

test('it generates flex classes', () => {
  return generatePluginCss({ options: ['flex'] }).then(css => {
    expect(css).toMatchCss(`
      [v-cloak] .v-cloak-flex {
        display: flex
      }

      .v-cloak-flex {
        display: none
      }
    `)
  })
})

test('it generates inline classes', () => {
  return generatePluginCss({ options: ['inline'] }).then(css => {
    expect(css).toMatchCss(`
      [v-cloak] .v-cloak-inline {
        display: inline
      }

      .v-cloak-inline {
        display: none
      }
    `)
  })
})

test('it generates inline block classes', () => {
  return generatePluginCss({ options: ['inline-block'] }).then(css => {
    expect(css).toMatchCss(`
      [v-cloak] .v-cloak-inline-block {
        display: inline-block
      }

      .v-cloak-inline-block {
        display: none
      }
    `)
  })
})

test('it generates inline flex classes', () => {
  return generatePluginCss({ options: ['inline-flex'] }).then(css => {
    expect(css).toMatchCss(`
      [v-cloak] .v-cloak-inline-flex {
        display: inline-flex
      }

      .v-cloak-inline-flex {
        display: none
      }
    `)
  })
})

test('it generates invisible classes', () => {
  return generatePluginCss({ options: ['invisible'] }).then(css => {
    expect(css).toMatchCss(`
      [v-cloak] .v-cloak-invisible {
        visibility: hidden
      }
    `)
  })
})
