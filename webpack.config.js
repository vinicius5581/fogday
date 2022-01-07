const path = require('path');
const entryPath = './client/src/index.js';
const distPath = './client/dist';
const distFile = 'bundle.js';
const htmlTemplate = "./client/dist/index.html"
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, entryPath),
  output: {
    filename: distFile,
    path: path.resolve(__dirname, distPath),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png$/,
        use: 'file-loader',
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader','css-loader', 'sass-loader']
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: htmlTemplate,
    }),
  ],
};
