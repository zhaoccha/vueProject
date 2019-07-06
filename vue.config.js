const banner = require('./mock/banner');
const path = require('path')
const fs = require('fs').promises;//文件操作
function readList(filename) {
     filename = path.resolve(__dirname, filename)//取到文件的绝对路径
    return fs.readFile(filename, 'utf-8').then(data => {
        return JSON.parse(data)//将data中的数据return出来
    })
}

module.exports={
    devServer:{
         before(app){
            //  这个接口是localhost:8080/banner下，不存在跨域
             app.get('/banner',function(req,res){
                 res.json({
                     code:200,
                     banner
                 })
             }),
             app.get('/alist',(req,res)=>{
                readList('./mock/list.json').then(data =>{
                    res.json({
                        code:200,
                        list:data
                    })
                })
            })
             
         }
    }
}