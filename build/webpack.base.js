const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, '../dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@src': path.resolve(__dirname, `../src`),
            '@pages': path.resolve(__dirname, `../src/pages`),
            '@store': path.resolve(__dirname, `../src/store`),
            '@routes': path.resolve(__dirname, `../src/routes`),
            '@common': path.resolve(__dirname, `../src/common`),
            '@actions': path.resolve(__dirname, `../src/actions`),
            '@reducers': path.resolve(__dirname, `../src/reducers`),
            '@components': path.resolve(__dirname, `../src/components`),
        },
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: 'babel-loader',
            exclude: /node_modules/,
        }],
    },
};