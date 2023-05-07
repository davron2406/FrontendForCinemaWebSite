module.exports = {
    mode: 'development',
    entry: './src/js/script.js',
    output: {
      path: __filename + 'dist/js',
      filename: 'bundle.js',
    },
    watch: true,
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', {
                debbug: true,
                corejs: 3,
                useBuiltIns: 'usage'
              }]]
            }
          }
        }
      ]
    }
  };