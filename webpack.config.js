const path = require('path');

//webpack.config.js
module.exports = {
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    }
};
