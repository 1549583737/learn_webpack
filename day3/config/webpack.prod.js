// module.exports = {
//     mode: 'production',
//     entry: './src/index.js'
// }
let base = require('./webpack.base') 
let {merge} = require('webpack-merge')
const CopyPlugin = require('copy-webpack-plugin')
let path = require('path')
// let webpack = require('webpack')


module.exports = function(env, obj) {
    console.log(env.qqq)
    console.log(obj.env.www)
    console.log(arguments)
    return merge(base, {
        mode: 'production',
        plugins: [
           new CopyPlugin(
               {
                   from: path.resolve(__dirname, '../static'),
                   to: path.resolve(__dirname, '../dist/static')
               }
           ),
        //    new webpack.DefinePlugin({
        //        WWW: 'hello',
        //        QQQ: '1+2'
        //    })
        ] 
    })
}