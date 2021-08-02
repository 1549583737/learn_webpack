// import './qq.css'
// import './ww.css'

// import './qq.less'

// import url from './1.jpeg'
// let img = new Image()
// img.src = url;
// document.body.appendChild(img)

// let btn = document.getElementById('btn')
// console.log('编译阶段的全局变量', process.env.NODE_ENV)
// let baseUrl = process.env.NODE_ENV = 'development' ? 'https://bai.com' : ''
// console.log("WWW")
// console.log(QQQ)
// console.log(WWW)
// console.log(obj.qqq)
// console.log(obj.www)
// console.log(obj)
// btn.onclick = function() {

//     fetch('/log123/action', {
//         method: 'post'
//     })
//     fetch('/list/?tag=video&ac=wap&count=20&format=json_raw&as=A196D1B0242FE36&cp=6104DF2E53C6BE1&min_behot_time=0&_signature=zDU4pwAArTskVw-mhn9dpMw1OL&i=')
// }

let a = 123;
let fn = () => {}
async function qqq() {
    let a = await Promise.resolve(111).then(data => data)
    console.log(a)
}
class A {
    qqq = 123
}
qqq()