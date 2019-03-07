const merge = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge(base, {
    entry: {
        app: './src/index',
    },
    output: {
        filename: 'js/[name].client.js'
    },
});