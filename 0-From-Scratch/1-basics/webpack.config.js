// Tell webpack where the entry -->
// and tell webpack where the output location for build folder -->
const path = require("path");
// set up the property on module. This is a node thing. A way to expose items to another file
module.exports = {
	mode: "development",
	entry: "./src/app.js",
	// provide 2 things for output. Absolute path and filename
	output: {
		path: path.join(__dirname, "public"),
		filename: "bundle.js",
	},
	// set up babel-loader in teh rulea array
	module: {
		rules: [
			{
				loader: "babel-loader",
				test: /\.js$/, // files to run the loader on
				exclude: /node_modules/,
			},
		],
	},
	// source maps help with debugging
	devtool: "eval-cheap-module-source-map",
	// similar to live-server. Install webpack-dev-server and configure here
	devServer: {
		// absoulte path
		contentBase: path.join(__dirname, "public"),
		port: 3000,
	},
};
