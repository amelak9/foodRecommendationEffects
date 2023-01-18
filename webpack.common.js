const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
});
module.exports = {
mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './src/index.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.(js)$/, exclude: "/node_modules/", use: 'babel-loader' },
            { test: /\.css$/, exclude: "/node_modules/", use: [ 'style-loader', 'css-loader' ]}
        ]
    },
    resolve: {
        extensions: ['*', '.js'],
        fallback: {
            fs: false,
            path: false,
            stream: false,
            buffer: false,
            timers: false,
            crypto: false,
            http: false,
            zlib: false,
            assert: false,
            util: false,
            async_hooks: false,
            net: false,
            tls: false
        }
    },
    node: {
        global: true
    },
 plugins: [htmlPlugin]
};
