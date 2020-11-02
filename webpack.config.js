const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: "./webpack/entry.js",
    mode: 'development',
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, 'assets', 'scripts')
    },
};