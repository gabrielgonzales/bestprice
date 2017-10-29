module.export = {
    entry: './src/js/app.js',
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel-loader'],
                query: {
                    presets: ['env', 'stage-0', 'react']
                }
            },
            {
                test:/\.less$/,
                loader:['style-loader','css-loader','less-loader']
            }
        ]
    }
}