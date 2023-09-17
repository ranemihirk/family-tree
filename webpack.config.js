// webpack.config.js
const path = require('path');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/App.tsx', // Adjust your entry file as needed
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      // Include any other Workbox options you need
    }),
  ],
};
