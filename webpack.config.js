var path = require('path')
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, "./src/js"),
        filename: "main-bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: `handlebars-loader`,
                options: {
                    runtime: path.resolve(__dirname, 'src/js/helpers/index'),
                },
            }
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "Hanlde Bars",
            filename: "index.html",
            template: "src/template.html",
        }),
    ],
}