<template>
    <button @click = 'ck'>{{msg}}</button>
</template>
<script>
export default {
    data(){
        return {
            msg:'我的按钮'
        }
    },
    methods:{
        ck(){
            alert('234')
        }
    }
}
</script>
