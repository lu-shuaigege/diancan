import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 注册全局组件
import OrderCustom from './components/OrderCustom'
Vue.component('OrderCustom', OrderCustom);

// 注册全局过滤器
import money from './filters/moneyFormat'
Vue.filter('moneyFormat', money);

// 注册全局指令
import bitmap from './directives/bitmap'
Vue.directive('bitmap', bitmap);

new Vue({
  el: '#app',
  // 注入路由
  router,
  // 注入仓库
  store,
  components: { App },
  template: '<App/>'
})


