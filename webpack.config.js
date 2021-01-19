const path = require('path')
const ESLinPlugin = require('eslint-webpack-plugin')

module.exports = {
    //1 especificando el archivo index de entrada
    entry: path.join(__dirname,'src/index.js'),
    // especificar el archivo de salida
    output:{
        path: path.join(__dirname,'dist'), 
        filename: 'bundle.js'
    },
    //3 folder donde servira
    devServer:{
        contentBase: path.join(__dirname,'dist'),
        port: 5050,
        compress:true,
        publicPath:'/'
    },
    module :{
        rules:[
            {
                test: /\.(js)$/,
                exclude:/node_modules/,
                use: ['babel-loader']
            },
        ]
    },
    plugins : [new ESLinPlugin()]
}