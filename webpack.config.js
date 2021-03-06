const path = require('path');

module.exports = {
  entry: './TodoApp/index.js',
  output:{
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  module:{
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options:{
          presets: ['react']
        }
      }
    ]
  }
}
