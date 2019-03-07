const merge = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge(base, {
    target: 'node',
    entry: {
        app: './server/index',
    },
    output: {
        filename: 'js/[name].server.js?[hash]',
        libraryTarget: 'commonjs2',
    },
});