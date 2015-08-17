var webpack = require('webpack');
var path = require('path');

module.exports = {

  entry: {
    app: [
      './app/app.js'
    ]
  },

	output: {
    path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},

  plugins: [
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    modulesDirectories: ['app', 'node_modules', __dirname]
  },

	module: {
		loaders: [
      { test: /\.jsx?$/, loaders: ['babel'], include: path.join(__dirname, 'app') },
			{ test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.less$/, loaders: ['style', 'css', 'autoprefixer', 'less'] },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loaders: ['url?limit=10000&minetype=application/font-woff'] },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loaders: ['file'] },
      { test: /\.json$/, loaders: ['json']}
		]
	}
};
