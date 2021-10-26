// Tell webpack where the entry -->
// and tell webpack where the output location for build folder -->
const path = require("path");
// set up the property on module. This is a node thing. A way to expose items to another file
module.exports = {
	mode: "development",
	entry: "./src/app.js", // main file where webpack should start
	// provide 2 things for output. Absolute path and filename
	output: {
		path: path.join(__dirname, "public"), // absolute path where out file is sent
		filename: "bundle.js", // name can be anything that i want
	},
	// set up babel-loader in the rules array
	module: {
		rules: [
			{
				loader: "babel-loader", // need to npm install babel-core, babel-loader to use babel with webpack
				test: /\.js$/, // files to run the loader on
				exclude: /node_modules/,
			},
			{
				test: /\.s?css$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "sass-loader" },
				],
			},
		],
	},
	// source maps help with debugging
	devtool: "eval-cheap-module-source-map",
	// similar to live-server. Install webpack-dev-server and configure here
	devServer: {
		// the dev-server does not build the physical build file it serves from memory.
		// absoulte path
		contentBase: path.join(__dirname, "public"),
		port: 3000,
		historyApiFallback: true,
	},
};
