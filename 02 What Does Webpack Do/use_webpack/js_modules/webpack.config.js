const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/ // <-- Regular Expression, sees if the file ends with '.js'
            }
        ]
    }
};

module.exports = config;
