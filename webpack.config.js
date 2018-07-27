const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = (env) => {
  const plugins = [
    new ExtractTextPlugin("css/[name].min.css"),
  ]

  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], { root: __dirname })
    )
  }

  return {

    entry: {
      home: path.resolve(__dirname, 'src/index.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      publicPath: path.resolve(__dirname, 'dist') + "/",
      chunkFilename: 'js/[id].[chunkhash].js',
    },
    devServer: {
      port: 9000,
    },
    module: {
      
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-2'],
            }
          },
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader:'css-loader',
                options: {
                  minimize: true,
                }
              }
            ]
          })
        },
          {
          // test:que tipo de archivo quieres reconocer.,
          // use:que loader se va encargar del archivo
          test: /\.styl$/,
          use: ExtractTextPlugin.extract({
            use: [
              "css-loader",
              {
                loader: 'stylus-loader',
                options: {
                  use: [
                    require('nib'),
                    require('rupture')
                  ],
                }
              }
            ]
          }),
        },
        {
          test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: '/img/[name].[ext]',
            }
          }
        },
      ]
    },
    plugins
  }
}