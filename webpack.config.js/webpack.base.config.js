const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const fs = require('fs');

const webpackConfig = {
  entry: './src/main.ts',
  target: 'node',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../', 'dist'),
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: [
      '.ts', '.js', '.json'
    ],
    modules: [
      'node_modules',
      'src',
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        test: /\.ts$/,
        ts: {
          compiler: 'typescript',
          configFileName: 'tsconfig.json'
        },
        tslint: {
          emitErrors: true,
          failOnHint: true
        }
      }
    }),
  ],
  module: {
    rules: [
     {
       test: /\.ts$/,
       loaders: 'awesome-typescript-loader'
     },
     {
       test: /\.json$/,
       use: 'json-loader'
     }
   ]
  },
  externals: [nodeExternals()],
};

module.exports = webpackConfig;
