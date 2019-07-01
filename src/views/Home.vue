<template>
  <div class="home">
      <h1>This is an home page</h1>
   <Banner :swiperSlides ='slider'/>
   <div class="box">
        <div class='box-cont' v-for ='item in lists' :key="item.id">
          <img :src = 'item.img'>
          
        <p>{{item.name}}</p>
        <p>价格：{{item.price}}</p>
        </div>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src

// 引入轮播组件
import Banner from '../components/banner'
import {getBanner} from '../api'//方法一
// import  * as obj from '../api'//方法二  obj可以改名字
import List from '../views/List'
import {getList} from '../api'
export default {
  name: 'home',
  created(){//ajax异步，越早发送越好，一般放created
 this.getSlider(),
 this.getList()

  },
  components: {
    Banner,
    List
  },
  data(){
    return {
      slider:[1,2,3,4],
      lists:[]
    }
    
  },
  methods:{
    //轮播图请求
    async getSlider(){
     let  {banner} = await getBanner()
     this.slider = banner;

      },
      // 列表发送请求
        async getList(){
     let  {list} = await getList()
     this.lists = list;
     console.log(this.lists)

      }
    }
  
};

</script>
<style>
.box{
  width:100%;
  display: flex;
  justify-content: center;
  /* justify-content: space-between; */
  flex-wrap:wrap;
  /* align-content: space-between; */
}
.box-cont{
  flex:1;
}
</style>
