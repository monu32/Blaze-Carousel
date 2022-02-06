const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    output : {
        filename : 'bundle.js',
        path     :  path.resolve(__dirname,'dist')
    },
    module : {
        rules:[
            {
                test : /\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : './src/index.html',
            inject:false
        })
    ],
    mode : 'development'
}