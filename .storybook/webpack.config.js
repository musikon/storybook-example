const path = require('path');

module.exports = async ({ config, mode }) => {

	config.module.rules.push({
		test: /\.less$/,
		loaders: ['style-loader', 'css-loader', 'less-loader'],
		include: path.resolve(__dirname, '../'),
	});

	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		use: [
			{
				loader: require.resolve('awesome-typescript-loader'),
			},
			{
				loader: require.resolve('react-docgen-typescript-loader'),
			},
		],
	});
	config.resolve.extensions.push('.ts', '.tsx');

	return config;
};
