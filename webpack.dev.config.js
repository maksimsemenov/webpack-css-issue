const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    library: 'Vital',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './dist-dev'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        // Needed for blueprint. See https://stackoverflow.com/a/45192304
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: `${require.resolve('file-loader')}?name=fonts/[name].[ext]`,
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'vital-blueprint.css',
    }),
    new CleanWebpackPlugin(['./dist-dev']),
  ],
};
