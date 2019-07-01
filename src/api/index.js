import axios from 'axios'
// axios请求返回的是一个promise，axios是基于promise封装的ajax
// 轮播图

//响应拦截  interceptors(拦截器)，过滤器
axios.interceptors.response.use(res =>{
    return res.data;
},err =>{
    Promise.reject(err);
})

// export导出的是一个接口，不能是固定值 
// 可以提取公共请求地址
axios.defaults.baseURL = 'http://localhost:3000'
// 方法一
// export let getBanner = ()=>{
   

//     return axios.get('http://localhost:3000/banner')
// }
const getBanner = ()=>{
    return axios.get('/banner')
}


export {getBanner}