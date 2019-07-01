// express 框架  ---》 node的框架，相当于js --》jq
// 引入express
let express = require('express');
const cors = require('cors')
let app = express();//会自动创建一个服务器
app.listen(3000);//服务器端口号
// 轮播图接口localhost：3000/banner
app.use(cors())
//  跨域解决方式 cors 跨域 跨域资源共享
// npm install cors 跨域资源包
const banner = require('./banner')
app.get('/banner',(req,res)=>{
    res.json({code:200,banner})
})
// app . 后面跟着的get post表示前端发送过来的请求方式
// 参数，1.请求路径，必须加，参数2:回调函数