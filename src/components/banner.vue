<template>
  <swiper :options="swiperOption">
    <!-- key值尽量用id，能不用索引就不用 -->
    <swiper-slide v-for="slide in swiperSlides" :key="slide.imgid"><img :src = 'slide.imgurl'></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>



  export default {
    name: 'carrousel',
     props:{
         swiperSlides:{
             type:Array,//传值如果是数组或对象，要用函数返回
             default:() =>[5,6,7,8]//不传参走默认值，如果传参，父组件的动态绑定属性名要与props一致改为swiperSlides
     }
     },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
        // swiperSlides: [1, 2, 3, 4, 5]
      }
    }
   
  }

</script>
<style scoped>
   .swiperSlides{
     width:100%;
     margin:20px auto;
     
   }
</style>


</style>


