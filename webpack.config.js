import { resolve as _resolve } from 'path';
import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
const EslingPlugin = require('eslint-webpack-plugin');

const baseConfig = {
    entry: _resolve(__dirname, './src/index'),
    mode: 'development',
    module: {
        rules: [
            {test: /\.ts$/i, use: 'ts-loader'},
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: _resolve(__dirname, '../dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: _resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new EslingPlugin({ extensions: 'ts' }),
        new CleanWebpackPlugin(),
    ],
};

export default ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};
