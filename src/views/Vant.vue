<template>
    <div>
        <van-button type="info" @touchstart ='toClick'>信息按钮</van-button>
        <van-button type="primary" size="mini" @click ='btnClick'>迷你按钮</van-button>
        
    </div>
</template>
<script>
export default {
    methods:{
        btnClick(){
            alert(91)
        },
        toClick(){
            alert('别摸我')
        }
    }
}
</script>
