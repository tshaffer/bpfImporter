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
  target: 'node',

  externals: {
    'core-js/fn/object/assign' : 'commonjs core-js/fn/object/assign',
    'core-js/fn/array/from' : 'commonjs core-js/fn/array/from',
    'core-js/es6/set' : 'commonjs core-js/es6/set',
    'core-js/es6/promise' : 'commonjs core-js/es6/promise',
    'fs-extra': 'commonjs fs-extra',
    'lodash': 'commonjs lodash',
    'uuid': 'commonjs uuid',
    'redux': 'commonjs redux',
    'reselect': 'commonjs reselect',
    'moment' : 'commonjs moment',
    'recursive-readdir' : 'commonjs recursive-readdir',
    'fs-extra' : 'commonjs fs-extra',
    'request' : 'commonjs request',
    '@brightsign/bscore': 'commonjs @brightsign/bscore'
  },
  // target: 'electron',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".js", ".json"]
  },

  // externals: {
  //   'core-js/fn/object/assign' : 'commonjs core-js/fn/object/assign',
  // },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ],
  }
}
