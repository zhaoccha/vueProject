<template>
<div class="container">
  <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
    :error.sync="error"
  error-text="请求失败，点击重新加载"
  :immediate-check='false'
  @load="onLoad"
>
   <div v-for="item in list" :key ='item.id'>
      <van-card 
  :id='item.id'
  tag="Hot"
  :price='item.price'
  :desc="item.info"  
  :title="item.name"
  :thumb="item.img"
/> 
  </div>
</van-list>
</div>
    
</template>

<script>
import {getPage} from '../api'
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      page:1,
      hasMore:true,
      error:false
    };
  },
  created(){
      this.getL()
    },
  methods: {
    async getL(){
      try{
        let {list,hasMore}= await getPage(this.page)
      this.list =[...this.list,...list];
      this.hasMore = hasMore;
      if(this.hasMore ==false){
        this.finished = true;//数据加载完成
        this.loading = false;//加载状态结束
      }
      }catch(e){
        this.error = true
      }
      
    },

    onLoad() {
     this.loadmore()
    },
      // 点击加载下一页
    loadmore(){
      this.page ++;
      // 发送请求拿到下一页数据
      this.getL()
    },
  }
}
</script>
