let fs = require('fs').promises;


module.exports = function (app) {
    // 当前端页面 get请求/list的时候 会收到json执行的参数
    app.get('/list', (request, response) => {
        return fs.readFile('../data/list.json').then(data => {
            console.log(data)
            response.json(JSON.parse(data.toString())) // 响应给前端的数据
        })
        // response.json({q: 123, w: 234, e: 345}) // 响应给前端的数据
    }),
    app.post('/log123/action', (req, res) => {
        res.json({
            content: 'hello word'
        })
    })
}