# Vue.js Tailwind CSS plugin

## Overview

Adds classes for working with Vue.js and Tailwind CSS.

This plugin adds classes for showing and hiding elements in different display variations in combination with Vue's [v-cloak directive](https://vuejs.org/v2/api/#v-cloak), which I originally saw in [the first 'Building Kitetail' video](https://youtu.be/XUXpcbYQ_iQ?t=2360). Then is particuarly useful when you want an element to be visible whilst Vue is compiling, and hidden afterwards.

## Installation

Add this plugin to your project:

```sh
# Using npm
npm install --save-dev tailwindcss-vuejs

# Using yarn
yarn add --dev tailwindcss-vuejs
```

## Usage

You can add the plugin to your Tailwind config as follows:

```js
plugins: [
  // ...
  require('tailwindcss-vuejs')(),
],
```

## Example

To see an example of this plugin in use, see the [oliverdavies.uk repository](https://github.com/opdavies/oliverdavies.uk).

## Author

[Oliver Davies](https://www.oliverdavies.uk) - Full Stack Developer
