// express 框架  ---》 node的框架，相当于js --》jq
// 引入express
let express = require('express');
const cors = require('cors')
let app = express();//会自动创建一个服务器
const path = require('path')//路径
const fs = require('fs').promises;//文件操作

function readList(filename) {
     filename = path.resolve(__dirname, filename)//取到文件的绝对路径
    return fs.readFile('list.json', 'utf-8').then(data => {
        return JSON.parse(data)//将data中的数据return出来
    })
}
// readList('list.json').then(data => {//这里then会调用之前data return出来的数据
//     console.log(data)
// })
app.listen(3000);//服务器端口号
// 轮播图接口localhost：3000/banner
app.use(cors())
//  跨域解决方式 cors 跨域 跨域资源共享
// npm install cors 跨域资源包
const banner = require('./banner')//引入的是banner.js
app.get('/banner', (req, res) => {//后台banner地址
    res.json({ code: 200, banner })
})
// 列表接口 localhost:3000/list
app.get('/listapi', (req, res) => {
    let { page } = req.query; // 前端传过来的页数 page=1 里面的  1 2 3
    console.log(page);
    readList('list.json').then((data) => {
      const maxData = 5; // 每次拿几条数据
      page -= 1; // 1=>0  2=>1
      // data 是list.json里面拿到的数组
      const pagedata = data.slice(page * maxData, (page + 1) * maxData);
      // 2*5 +5 = (2+1)*5
      // 如果数据没有了 需要告诉前端
      // (page+1)*5   大于数组的length 表示没有更多数据了
      // 例如 我只有8条数据  2*5 =10 >8
      // 定义一个是否有更多数据的变量
      const hasMore = !((page + 1) * maxData >= data.length);
      if (!isNaN(Number(page))) { //如果有page 证明是分页获取
        res.json({
          code: 200,
          list: pagedata,
          hasMore,
        });
      }else{ //没有就返回全部数据 
         res.json({
          code: 200,
          list: data
        });
      }
    });
  });
//   http://localhost:3000/listapi?page=1
  
// app . 后面跟着的get post表示前端发送过来的请求方式
// 参数，1.请求路径，必须加，参数2:回调函数