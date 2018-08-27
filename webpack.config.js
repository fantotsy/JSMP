const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js',
        admin: './src/js/admin.js',
        visitor: './src/js/visitor.js'
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        publicPath: 'build/'
    },
    devServer: {
        overlay: true
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 0,
            cacheGroups: {
                default: {
                    name: 'common'
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'stage-3']
                        }
                    }
                ]
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]',
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new CleanWebpackPlugin(
            ['build'],
            {
                root: __dirname,
                verbose: true,
                dry: false,
                exclude: []
            }
        )
    ]
};