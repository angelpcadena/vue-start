'use strict'

const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = (env, argv) => {
	return {
		mode: argv.mode,
		entry: {
			main: './src/main.js'
		},
		resolve: {
			alias: {
				'vue$': 'vue/dist/vue.esm.js'
			},
			extensions: ['.js', '.vue'],	
		},  
		output: {
			path: path.join(__dirname, 'dist'),
			filename: '[name].js'
		},
		devServer: {
      contentBase: './dist',
      historyApiFallback: true,
      hot: true,
      https: true
		},
		module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|otf)$/i,
          loader: 'file-loader',
          options: {
            esModule: false
          }
        },
				{
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: [
            argv.mode !== 'production'
              ? 'vue-style-loader'
              : MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            argv.mode !== 'production'
              ? 'vue-style-loader'
              : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
                sassOptions: {
                  fiber: require('fibers')
                }
              }
            }
          ]
        },
        {
          test: /\.(js|vue)$/,
          use: 'eslint-loader',
          enforce: 'pre'
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        }
			],
		},
		plugins: [
      new CleanWebpackPlugin(),
			new VueLoaderPlugin(),
			new HtmlWebpackPlugin({
				template: 'index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css'
      }),
		]
	}
}