import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 引入字体图标（本地引用）
import './assets/icon.css'
// 1.引入轮播组件

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
//2. 引入轮播样式
import 'swiper/dist/css/swiper.css'
// 3.声明使用轮播组件
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
