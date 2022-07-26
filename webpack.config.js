const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    output: {
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|jpeg)$/,
                use: 'file-loader'
            }
        ]
    },
    optimization: {},
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Mi Webpack App',
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            //filename: '[name].[fullhash].css', //nombre que queremos para nuestro archivo => el hash evita que mantengan en el navegador versiones de chache
            filename: '[name].css', //nombre que queremos para nuestro archivo => el hash evita que mantengan en el navegador versiones de chache
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/assets/",  to: "assets/"}
            ]
        })
    ]
}