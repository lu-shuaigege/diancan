import Vue from 'vue'
import Router from 'vue-router'
import Order from "../views/order";
import Menu2 from "../views/menu2";
import Menu3 from "../views/menu3";

import Login from "../views/login";

import store from '../store'

// 安装路由插件
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/order'
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      beforeEnter: (to, from, next) => {
        // alert('beforeEnter');
        next();
      }
    },
    {
      path: '/menu2',
      name: 'menu2',
      component: Menu2,
      meta: {
        needLogin: true
      },
      beforeEnter: (to, from, next) => {
        // alert('beforeEnter');
        next();
      }
    },
    {
      path: '/menu3',
      name: 'menu3',
      component: Menu3,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    }
  ]
})

router.beforeEach((to, from, next) => {
  // alert('beforeEach');
  console.log(to);
  if (to.name === 'login') {
    store.commit('hideSlideBar');
  } else {
    store.commit('showSlideBar');
  }

  if (to.meta.needLogin && !store.state.isLogin) {
    next({ name: 'login', query: { redirect: to.name } });
  } else {
    next();
  }
});

export default router;
