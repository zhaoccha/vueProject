<template>
<div>
    <div>
        <van-button type="info" @touchstart ='toClick'>信息按钮</van-button>
        <van-button type="primary" size="mini" @click ='btnClick'>迷你按钮</van-button>
        
    </div>
    <!-- 演示refs取组件 -->
    子组件refs用法
    <MyButton refs='btn' />
</div>
    
</template>
<script>
import MyButton from '../components/MyButton'
export default {
    methods:{
        btnClick(){
            alert(91)
        },
        toClick(){
            alert('别摸我')
        }
    },
    components:{
        MyButton
    },
  mounted(){
      let btn = this.$refs.btn;
      console.log(btn.msg);
      btn.msg='anniu'//改值一般不用
     this.$refs.btn.ck()//用子组件触发父组件的事件，利用refs
  }
}

</script>
