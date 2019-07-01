 讲 module用的
 以下两种写法完全一样
 ##moudele export default 和 import
 写法一
export let a = 1
export let b =2
写法二：
let a = 1
let b = 2
export {a,b}
 只要看到export
 import {a,b} from 'a.js'

或者yong
import * as obj from 'a.js'
##moudle export default 和import
1.export default 后面可以跟具体的值，默认导出
。。。 js
a.js
let a = 1
export default a 
后者
export default 1
 export{}
 function get(){
     export default get
 }
 2.默认导出的引入
 、、js  xxx:导出的变量
 import xxx from 'a.js'
 ##综合写法 export default 和 export可以同时使用
 js
 a.js
 export let a =1
 export default 2
 写法
 b.js
 import {a} from 'a.j'
import xx from 'a.js'
综合写法（用逗号作为分隔符）写在一起
import {a},xx from 'a.js'