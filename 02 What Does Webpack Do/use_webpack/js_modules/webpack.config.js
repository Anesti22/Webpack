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
            },

            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            }

        ]
    },
};

module.exports = config;
