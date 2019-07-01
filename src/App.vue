<template>
  <div id="app">
    <!-- 3.在html结构中使用 -->
    <Nav/>
    <router-view/>
  </div>
</template>
<script>
// 1.引入导航组件
import Nav from './components/Nav'
export default {
  components:{//2.祖册组件，将组件映射成标签
  Nav
  }
}
</script>

<style lang="less">
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  // padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
    text-decoration: none;
    text-align: center;
  }
}
</style>
