import axios from 'axios'
// axios请求返回的是一个promise，axios是基于promise封装的ajax
// 轮播图

//响应拦截  interceptors(拦截器)，过滤器
axios.interceptors.response.use(res =>{
    return res.data;
},err =>{
    Promise.reject(err);
})
// axios.interceptors.request.use(res =>{
//     return res.data;
// },err =>{
//     Promise.reject(err)
// })
// export导出的是一个接口，不能是固定值 
// 可以提取公共请求地址
// axios.defaults.baseURL = 'http://localhost:3000'//本机地址
axios.defaults.baseURL = 'http://132.232.89.22:3000'//阮野远程接口地址 
// 如果用vue.config.js配置的话不需要跨域，也不需要写地址，只需要在vue.config.js中配置
// 方法一
// export let getBanner = ()=>{
   

//     return axios.get('http://localhost:3000/banner')
// }
// 轮播图请求
const getBanner = ()=>{
    return axios.get('/banner');
}
// 首页列表的请求
const getList = ()=>{
    // return axios.get('/alist')
    return axios.get('/listapi');
}
// getHomeAll合并了轮播图和首页列表的 执行拿到结果 [banner:[],list:[]]
const getHomeAll =()=>{
    return axios.all([getBanner(),getList()])
}
// 数据分页请求(参数决定范文第几页)
const getPage =(page)=>{
   return axios.get(`/listapi?page=${page}`)
}
export {getHomeAll,getList,getBanner,getPage}