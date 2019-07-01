<template>
    <div id="nav">
      <router-link to="/" exact>
      <i class="iconfont icon-meiriyicai"></i>
      <span>首页</span>
      </router-link> 
      <router-link to="/list">
      <i class="iconfont icon-liebiao"></i>
      <span>列表</span>
      </router-link>
       <router-link to="/chart">
       <i class="iconfont icon-icon"></i>
       <span>购物车</span>
       </router-link> 
      <router-link to="/proflie">
      <i class="iconfont icon-add"></i>
      <span>个人中心</span>
      </router-link>
       <router-link to="/detail">
       <i class="iconfont icon-meiriyicai"></i>
       <span>详情</span>
       </router-link> 

    </div>
</template>
<style>
#nav{
    position: fixed;
    display:flex;
    justify-content: center;
    align-items: center;
    bottom:0;
    width:100%;
    height: 58px;
    border-top:1px solid #ece3ec
}
#nav a {
    flex:1;
    display:flex;
    flex-direction: column;
    text-align: center;
    padding-top:15px;
}
#nav a i {
    font-size: 26px;
}
.a .router-link-active{
    color: red;
}
</style>

