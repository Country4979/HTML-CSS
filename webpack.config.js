const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        home: './src/home.js',
        contact: './src/contact.js',
        completedReg: './src/completedReg.js',
        works: './src/works.js',
        error404: './src/error404.js',
        error500: './src/error500.js',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].[chunkhash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        //clean: true,
    },
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif|ico)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/templates/index.html',
            filename: 'home.html',
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            template: 'src/templates/contact.html',
            filename: 'contact.html',
            chunks: ['contact']
        }),
        new HtmlWebpackPlugin({
            template: 'src/templates/completedReg.html',
            filename: 'completedReg.html',
            chunks: ['completedReg']
        }),
        new HtmlWebpackPlugin({
            template: 'src/templates/works.html',
            filename: 'works.html',
            chunks: ['works']
        }),
        new HtmlWebpackPlugin({
            template: 'src/templates/404.html',
            filename: 'error404.html',
            chunks: ['error404']
        }),
        new HtmlWebpackPlugin({
            template: 'src/templates/500.html',
            filename: 'error500.html',
            chunks: ['error500']
        }),
    ],
}