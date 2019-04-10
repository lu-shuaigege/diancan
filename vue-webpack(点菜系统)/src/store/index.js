import Vue from 'vue'
import Vuex from 'vuex'

// 安装Vuex插件
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        orderList: [],
        // 是否显示侧边栏
        isSlideBarShow: true,
        // 模拟是否已经登陆过
        isLogin: false
    },
    mutations: {
        // orderList
        add(state, info) {
            let index = state.orderList.indexOf(info);
            if (index === -1) {
                state.orderList.push(info);
                let index = state.orderList.indexOf(info);
                state.orderList[index].count++;
            } else {
                state.orderList[index].count++;
            }
        },
        del(state, info) {
            let index = state.orderList.indexOf(info);
            state.orderList.splice(index, 1);
        },
        increment(state, info) {
            let index = state.orderList.indexOf(info);
            state.orderList[index].count++;
        },
        decrement(state, info) {
            let index = state.orderList.indexOf(info);
            state.orderList[index].count--;
            if (state.orderList[index].count === 0) {
                state.orderList.splice(index, 1);
            }
        },
        // isSlideBarShow
        showSlideBar(state) {
            state.isSlideBarShow = true;
        },
        hideSlideBar(state) {
            state.isSlideBarShow = false;
        },
        // isLogin
        setLogin(state) {
            state.isLogin = true;
        }
    }
});
