module.exports = {
  entry: './src/index.ts',
  output: {
    publicPath: 'bpfimporter/',
    path: __dirname + '/dist',
    libraryTarget: 'umd',
    library: 'bpfimporter',
    filename: 'bpfimporter.js'
  },
  devtool: 'source-map',
  externals: {
    'fs-extra' : 'commonjs fs-extra',
    'lodash' : 'commonjs lodash',
    'moment' : 'commonjs moment',
    'recursive-readdir' : 'commonjs recursive-readdir',
    'request' : 'commonjs request'
  },
  target: 'electron',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  externals: {
    'core-js/fn/object/assign' : 'commonjs core-js/fn/object/assign',
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ],
  }
}
