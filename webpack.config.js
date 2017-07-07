module.exports = {
  entry:'./app.ts',
  output: {
    filename: './bundle.js'
  },
  resolve: {
      root:['./node_modules'],
      extensions:['', '.webpack.js', 'web.js', '.js', '.ts']
  },
  module: {
    loaders: [
        { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  devServer: {
    contentBase: 'public'
  }
};
