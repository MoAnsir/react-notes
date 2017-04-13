const path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'dist/');
var APP_DIR = path.resolve(__dirname, 'src/');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: BUILD_DIR + '/index.html',
	filename: 'index.html',
	inject: 'body'
});


module.exports = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'js/bundle.js'
	},
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
			{test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
			{test: /\.json$/, exclude: /(node_modules)/, loader: "json-loader"},
			{test: /\.css$/, loader: [ 'style-loader', 'css-loader' ], exclude: /node_modules/},
			//{test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader"},
			//{test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/, loader: 'file-loader'},
			//{test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: "url-loader"},
			//{test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/, loader: 'url-loader?limit=100000&name=[name].[ext]'}
		]
	},
	plugins: [HtmlWebpackPluginConfig]
};