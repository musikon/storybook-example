const path = require('path');

module.exports = async ({ config, mode }) => {

	config.module.rules.push({
		test: /\.less$/,
		loaders: ['style-loader', 'css-loader', 'less-loader'],
		include: path.resolve(__dirname, '../'),
	});

	return config;
};
