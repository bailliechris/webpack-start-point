const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    // Where to find the entry .js file
    entry: {
        main: path.resolve(__dirname, './src/app.js'),
    },

    // How to format the output of the converted file (and into which folder)
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        contentBase: './dist',
        open: true
    },

    module: {
        rules: [
            {
                // Check we're only bothering with converting JavaScript files
                test: /\.js$/,
                // Ignore /node_modules
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        // Add support for Async and Await
                        plugins: ["@babel/plugin-transform-runtime"]
                    }
                },
            },
            { 
                test: /\.css$/, 
                use: ["style-loader", "css-loader"] 
            },
            { 
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
        title: "Project Title Goes Here",
        }),
    ],
};
