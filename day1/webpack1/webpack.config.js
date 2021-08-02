let path = require('path'); // path是node的内置模块 不用单独安装
// require module.exports exports __dirname __filename

// __dirname  指的当前文件所在文件夹的绝对目录
// __filename 指的当前文件的绝对目录 
console.log(__dirname, __filename)
module.exports = {
    entry: './src/main.js', // 默认是 src/index.js
    mode: 'development',
    output: {
        // 写 绝对路径的时候 path.join和path.resolve有区别 不写绝对路径这两个方法没区别
        path: path.resolve(__dirname, 'app'), // 必须是一个绝对路径 默认是打包到dist文件现在是打包到指定文件夹app
        filename: 'hello.js' // 默认打包到main.js
    }
}