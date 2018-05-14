const path = require('path')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
  },

  // Enable sourcemaps for debugging webpack's output.

  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ],
  },

  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          errorFormatter: function customErrorFormatter(error, colors) {
            const messageColor = error.severity === 'warning' ? colors.bold.yellow : colors.bold.red;
            return messageColor(`${error.file}(${error.line}, ${error.character}): ${error.severity}: TS${error.code}: ${error.content}`);
          }
        }
      }
    ]
  }
};