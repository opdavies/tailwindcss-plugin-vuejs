const _ = require('lodash')
const cssMatcher = require('jest-matcher-css')
const defaultConfig = require('tailwindcss/defaultConfig')
const plugin = require('./index.js')
const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

const disableCorePlugins = () => {
  return _.mapValues(defaultConfig.variants, plugin => {
    return false
  })
}

const generatePluginCss = () => {
  return postcss(
    tailwindcss({
      corePlugins: disableCorePlugins(),
      plugins: [plugin()],
    })
  )
  .process('@tailwind utilities;', {
    from: undefined,
  })
  .then(result => {
    return result.css;
  });
};

expect.extend({
  toMatchCss: cssMatcher,
});

test('it generates the default css for v-cloak classes', () => {
  return generatePluginCss().then(css => {
    expect(css).toMatchCss(`
      [v-cloak] .v-cloak-block {
        display: block;
      }

      [v-cloak] .v-cloak-flex {
        display: flex;
      }

      [v-cloak] .v-cloak-hidden {
        display: none;
      }

      [v-cloak] .v-cloak-inline {
        display: inline;
      }

      [v-cloak] .v-cloak-inline-block {
        display: inline-block;
      }

      [v-cloak] .v-cloak-inline-flex {
        display: inline-flex;
      }

      [v-cloak] .v-cloak-invisible {
        visibility: hidden;
      }

      .v-cloak-block,
      .v-cloak-flex,
      .v-cloak-inline,
      .v-cloak-inline-block,
      .v-cloak-inline-flex {
        display: none;
      }
    `);
  });
});
