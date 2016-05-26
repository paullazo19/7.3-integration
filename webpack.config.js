module.exports = {
  entry: './app/modules/index.js',

  output: {
    filename: 'bundle.js',
    publicPath: 'app/assets/javascripts',
    path: 'app/assets/javascripts'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
