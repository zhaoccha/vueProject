<template> 
<div class="container">
  <div class="home"> 
       <h1>This is an home page</h1>
    <Banner :swiperSlides="slider"/> 
    <div class="box">
      <!-- <div class='box-cont' v-for ='item in lists' :key="item.id">
          <img :src = 'item.img'>
          
        <p>{{item.name}}</p>
        <p>价格：{{item.price}}</p>
      </div>-->
      <ul>
        <li v-for="item in lists" :key="item.id">
          <img :src="item.img" :alt="item.info">
          <p>{{item.name}}</p>
          <p>价格：{{item.price}}</p>
        </li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

// 引入轮播组件
import Banner from "../components/banner";
// import { getBanner } from "../api"; //方法一
// import  * as obj from '../api'//方法二  obj可以改名字
import List from "../views/List";
// import { getList } from "../api";
import {getHomeAll} from '../api'

export default {
  name: "home",
 created() {
    //ajax异步，越早发送越好，一般放created
    // this.getSlider(), this.getList(),this.getHomeAll();
    this.getAll()//合并写法
  },
  components: {
    Banner,
    List
  },
  data() {
    return {
      slider: [1, 2, 3, 4],//名字要和methods方法中的名字对应
      lists: []
    };
  },
  methods: {
   async getAll(){
    //  多个请求完成之后把数据集合到一起
     let [{banner},{list }] = await getHomeAll();
     this.slider = banner;
     this.lists = list
   }
}
}
</script>

 <style scoped>
 
 .container{
   width:100%;
   position: fixed;
   top:0;
   bottom: 58px;
   /* overflow-y: auto; */
   overflow-y: scroll;
 }
.box ul {

  width: 100%;
  display: flex;
 
  justify-content: center;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  /* align-content: space-between; */
}
.box ul li {
  list-style: none;
  width:25%;
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}

</style>

