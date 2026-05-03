const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/public/index.html',
        })
    ]
}