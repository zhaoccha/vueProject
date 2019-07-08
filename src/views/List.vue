<template>
<div class="container" ref='scrollele' @scroll ='scmore'>
<div class="list">
    <h1>This is an list page</h1>
    <div  v-for="item in list" :key = item.id> 
      <van-card
  :price="item.price"
  :desc="item.info"  
  :title="item.name"
  :thumb="item.img"
/>
    </div>
  
<!-- <van-button round type="danger">点击选中下一页</van-button> -->
  </div>
   <div class="btn-box">
     {{hasmore}}
      <van-button round type ='primary' @click = 'loadmore'>  {{hasmore ?'点击加载更多':'没有更多了'}}</van-button>
    
    </div>
</div>
  
</template>
<script>
import {getPage} from '../api'
export default {
  data(){
    return {
      list:[],
      page:1,//默认拿第一页数据
      hasmore:true
    }
  },
  created(){  
    this.getPageList()
  },
  methods:{
     async getPageList(){
     let {list,hasMore} = await getPage(this.page);
    //  把新请求回来的数据和原来的this.list的数据合并就可以保留所有数据
    //  this.list = list;
    // this.list = this.list.concat(list);//es5写法
    this.hasmore = hasMore;
    this.list=[...this.list,...list]

    },
    // 点击加载下一页
    loadmore(){
      // 如果没有更多数据了，就不在发送请求了
      if(this.hasmore == false){
        return;
      }
      console.log(1)
      // 页数加一
      this.page ++;
      // 发送请求拿到下一页数据
      this.getPageList()
    },
    scmore(){
      // 防抖和节流
      clearTimeout(this.timer)
  this.timer=  setTimeout(()=>{
              let scele = this.$refs.scrollele;
      // let scrollTop = scele.scrollTop;
      // let scrollHeight = scele.scrollHeight;
      // let clientHeight = scele.clientHeight;
      // 可以用结构赋值的方法来简化代码
      let {scrollTop,scrollHeight,clientHeight} =scele;
      // 判断都底部加载更多
      if(scrollTop+scrollHeight+10>clientHeight){
        console.log('This is buttom');
        this.loadmore()
      }
      },100)

    }
  }
}
</script>
<style>
 .container{
   width:100%;
   position: fixed;
   top:0;
   bottom: 58px;
   /* overflow-y: auto; */
   overflow-y: scroll;
 }
 .btn-box{
   text-align: center;
 }
</style>
