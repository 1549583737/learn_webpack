import xxx from './a.js';
import xxxx from './b.js';  // 对应的都是默认导出 export default:  默认导出的时候 我们导入的名字可以随便起

import {qqq} from './a.js'; // 对应的就是具名导出(export 声明关键字 变量名) 具名导出的时候 导出什么名字 必须导入什么名字

import * as all from './a.js' // 把对应文件的所有导出 全部导入
console.log(xxx.a, xxxx, qqq, all.default.a)