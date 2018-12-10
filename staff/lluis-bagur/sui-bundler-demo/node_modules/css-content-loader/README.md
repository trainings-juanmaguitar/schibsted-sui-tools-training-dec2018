# css-content-loader

> CSS content loader for webpack

[![Build Status](https://travis-ci.org/creeperyang/css-content-loader.svg?branch=master)](https://travis-ci.org/creeperyang/css-content-loader)
[![Coverage Status](https://coveralls.io/repos/github/creeperyang/css-content-loader/badge.svg?branch=master)](https://coveralls.io/github/creeperyang/css-content-loader?branch=master)
[![Dependency Status](https://david-dm.org/creeperyang/css-content-loader.svg)](https://david-dm.org/creeperyang/css-content-loader)
[![devDependency Status](https://david-dm.org/creeperyang/css-content-loader/dev-status.svg)](https://david-dm.org/creeperyang/css-content-loader#info=devDependencies)

*Why this loader?* We use `style-loader` as the last loader for style files and it will insert a `<style>` or `<link>` tag into the html doc. In most cases, it's enough and works perfectly.

However, what if we just want to **get the style content as string** directly! Like I just want `require` the style content in code and process the string. This loader is for this corner case.

## Install

[![NPM](https://nodei.co/npm/css-content-loader.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/css-content-loader/)

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

```js
var cssContent = require('css-content!./file.css');
// => returns css code as string from file.css
// cssContent is string like `body { margin: 0; }`

var cssContent2 = require('css-content!css!postcss!sass!./file.scss');
// recommend to use with css-loader and other style loaders.
// and css-content-loader will get the compiled css content as string.
```

### loader config

Currently no special config is needed for `css-content-loader`. It works well with `css-loader`.

```js
module.exports = {
    module: {
        loaders: [
            { test: /\.css$/, loader: "content-loader!css-loader" },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" }
        ]
    }
};
```

## License

[MIT](http://www.opensource.org/licenses/mit-license.php)
