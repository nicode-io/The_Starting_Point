var path = require('path');

module.exports = {
    // specify input root of project and output bundle file path
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist', 'assets'),
        filename: 'bundle.js'
    },
    // Add source mapping for an easiest debugging
    devtool: '#source-map',
    // list loaders that need to be run on specified modules
    module: {
        rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}] // here we specify to run babel-loader in all .js files excepts in node_modules folder
    },
};