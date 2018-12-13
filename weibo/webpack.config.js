const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	mode:'development',
	entry:'./src/app.js',
	output:{
		path:path.join(__dirname,'./build'),
		filename:'js/build.js'
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:'vue-loader'
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			}
		]
	},
	devServer:{
		contentBase:path.join(__dirname,'build'),
		inline:true,
		port:3000,
		open:true
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./src/index.html'
		}),
		new VueLoaderPlugin()
	]
}
