module.exports = {
    entry: {
        home: './src/home.js',
        contact: './src/contact.js',
        completedReg: './src/completedReg.js',
        works: './src/works.js',
        error404: './src/error404.js',
        error500: './src/error500.js',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundel.js',
        path: __dirname + '/dist',
        clean: true,
    }
}