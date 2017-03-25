var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
        rules: [
			{
				test: /\.css$/,
				use: [
				  { loader: "style-loader" },
				  { loader: "css-loader" },
				],
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				loader: 'file-loader?name=[name].[ext]',
			},
			{
				test: /\.(pug|jade)$/, 
				loaders: ['file-loader?name=[name].html', 'pug-html-loader?pretty&exports=false']
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
					  presets: ['env']
					}
				}
			},

      ]
    }
};
