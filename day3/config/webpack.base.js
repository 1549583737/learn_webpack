let {CleanWebpackPlugin} = require('clean-webpack-plugin')
let html = require('html-webpack-plugin')
let path = require('path')
let webpack = require('webpack')


let MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    // entry: "./src/index.js", // 相对于当前执行环境的路径
    entry: {
        aaa: './src/index.js',
        bbb: './src/other.js'
    },
    output: {
        filename: '[name].[contenthash:8].js',
        path: path.resolve(__dirname, '../dist'), // 这个路径不需要当前目录
        // webpack5写法
        assetModuleFilename: 'imgs/[name].[ext]'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new html({
            filename: 'index.html',
            template: './public/index.html',
            chunks: ['aaa']
        }),
        new html({
            filename: 'other.html',
            template: './public/other.html',
            chunks: ['bbb']
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css'
        }),
         // 定义编译阶段的全局变量
        new webpack.DefinePlugin({ 
            WWW: "'hello'",
            QQQ: JSON.stringify('1+2'),
            "AAA.A": 'qqq',
            obj: {
                www: '888',
                qqq: '999'
            }
        })
    ],
    module: {
        /* loader的加载顺序是从右向左的，从下往上 */
        // css-loader 是把css模块翻译成webpack的有效模块（把不认识的模块翻译成认识的模块）
        // style-loader是把翻译好的css文件变成对应的js, 当这个js执行的时候把对应的css变成style标签插入到header当中
        rules: [
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // }

            // {
            //     test: /\.css$/,
            //     use: 'style-loader'
            // },
            // {
            //     test: /\.css$/,
            //     use: 'css-loader'
            // }
            {
                test: /\.css$/,
                // test: /\.(css|less)$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        url: true,
                    }
                }, "less-loader", {loader: 'postcss-loader'}]
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader']
            },
            {
                test: /\.(jpeg|jpg|png|gif)$/,
                // use: [
                //     {
                //         loader: 'url-loader',
                //         options: {
                //             limit: 1024 * 5, // 资源大小不超过30kb的时候转成base64字符串
                //             // 不使用时会生成如12f21jfaoewj23423foajewofjoewfo.jpeg
                //             // name: 'imgs/[name].[ext]' // 如果不指定这个格式，会生成一大串数字字母组成的图片名字
                //         }
                //     }
                // ]
                // webpack5写法
                type: 'asset/resource'
                // url-loader 允许你有条件地将文件转换为内联的 base-64 URL (当文件小于给定的阈值)，
                // 这会减少小文件的 HTTP 请求数。如果文件大于该阈值，会自动的交给 file-loader 处理
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/, //排除node_modules中的js文件
            }
        ]
    }
}