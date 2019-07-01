<template>
  <div class="home">
      <h1>This is an home page</h1>
   <Banner :swiperSlides ='slider'/>

  </div>
</template>

<script>
// @ is an alias to /src

// 引入轮播组件
import Banner from '../components/banner'
import {getBanner} from '../api'//方法一
// import  * as obj from '../api'//方法二  obj可以改名字
export default {
  name: 'home',
  created(){//ajax异步，越早发送越好，一般放created
 this.getSlider()

  },
  components: {
    Banner
  },
  data(){
    return {
      slider:[1,2,3,4]
    }
    
  },
  methods:{
    //轮播图请求
    async getSlider(){
     let  {banner} = await getBanner()
     this.slider = banner;

      }
    }
  
};
</script>
