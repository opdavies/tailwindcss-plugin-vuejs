# Vue.js Tailwind CSS plugin

## Overview

Adds classes for working with Vue.js and Tailwind CSS.

This plugin adds classes for showing and hiding elements in different display variations in combination with Vue's [v-cloak directive](https://vuejs.org/v2/api/#v-cloak), which I originally saw in [the first 'Building Kitetail' video](https://youtu.be/XUXpcbYQ_iQ?t=2361). Then is particuarly useful when you want an element to be visible whilst Vue is compiling, and hidden afterwards.

## Installation

Add this plugin to your project:

```
# Using npm
npm install --save-dev tailwindcss-vuejs

# Using yarn
yarn add --dev tailwindcss-vuejs
```

## Usage

You can add the plugin to your Tailwind config as follows:

```
require('tailwindcss-vuejs')()
```
