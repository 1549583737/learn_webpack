function sum(a,b) {
    return a+b
}

function minus(a, b) {
    return a-b
}

exports.sum = sum
exports.minus = minus
// 这种写法不支持
// exports = { 
//  // 错误    
//     sum, minus
// }