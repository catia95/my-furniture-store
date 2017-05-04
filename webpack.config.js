const path = require('path');

module.exports = {
    node: {
        net: 'empty',
        tls: 'empty',
        dns: 'empty'
    },
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './public/js'),
        filename: 'bundle.js'
    }
};