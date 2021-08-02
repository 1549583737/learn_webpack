let base = require('./webpack.base')
let path = require('path')
let {merge} = require('webpack-merge')
let app = require('../mock/app')
module.exports = merge(base, {
    mode: 'development',
    plugins: [],
    devtool: 'cheap-module-source-map',
    // devtool: 'source-map',
    devServer: {
        // 这里的配置跟生产环境没有任何关系 仅用于开发
        port: 3000, // 指定打开的服务的端口号
        open: true, // 服务启动之后自动打开浏览器页面
        hot: true, // 热更新启动
        compress: true,
        writeToDisk: true, // 将服务启动打包的文件写入硬盘
        contentBase: path.resolve(__dirname, '../static'), // 是把static文件夹当做静态服务文件
        contentBasePublicPath: '/static123', // 访问静态资源的时候 需要的目录 默认是个 /
        proxy: {
            // '/log': 'https://m.toutiao.com',
            '/log123': {
                target: 'https://m.toutiao.com',
                pathRewrite: {
                    // 路径重写
                    '/log123': '/log'
                },
                changeOrigin: true
                // changeOrigin 后端接收到前端服务的时候 都会接收到前端的域名
                // 这个属性 让后端获取前端域名的时候 拿到的不是真正的前端的域名而是代理的域名
            },
            '/list': {
                target: 'https://m.toutiao.com',
                changeOrigin: true,
            }
        },
        // 仅适用于后端没有开发出来接口，前期开发，或者自己写node服务自己写接口
        before: app
    }
})