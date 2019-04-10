<template>
  <div id="app">
    <transition name='move' appear>
      <div class="con">
        <slideBar v-if="isShow" class="fl"></slideBar>
        <router-view class="fl"/>
      </div>
    </transition>
  </div>
</template>

<script>
import slideBar from "./components/slideBar";

export default {
  name: "App",
  computed: {
    isShow() {
      return this.$store.state.isSlideBarShow;
    }
  },
  components: {
    slideBar
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
ul {
  list-style: none;
}
.fl {
  float: left;
}
.router-link-active {
  background-color: #ddd;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 1000px;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
}
body {
  background-color: lightgray;
}
h1 {
  text-align: center;
}
ul {
  list-style: none;
  overflow: hidden;
}
#app {
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  background-color: #fff;
}
.tabContent {
  text-align: left;
}
.menu {
  width: 100px;
  height: 100%;
  background-color: #f56c6c;
}
.menu li {
  border-bottom: 1px solid #fff;
}
.menu a {
  display: block;
  text-align: center;
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  padding: 20px 0;
}
.router-link-active {
  background-color: #ddd;
}
a.router-link-active {
  color: #000;
}
.con {
  height: 100%;
}
.view {
  width: 1100px;
}
.fl {
  float: left;
}
.order {
  border: 1px solid lightgrey;
  width: 1100px;
}
.app-left {
  width: 389px;
}
.app-right {
  width: 709px;
}
.product {
  width: 709px;
  border: 1px solid lightgrey;
  padding: 10px;
}
.barTitle {
  font-size: 18px;
  color: grey;
}
.tabHeader {
  margin-bottom: 20px;
}
.tabHeader li {
  padding: 0 10px;
  line-height: 40px;
  cursor: pointer;
}
.order-ul {
  padding-bottom: 20px;
  margin-top: 20px;
  border-bottom: 1px solid lightgray;
}
.order-ul li {
  width: 92px;
  text-align: center;
}
.order-ul .operation {
  color: #409eff;
}
.order-ul .operation span {
  padding: 0 5px;
  cursor: pointer;
  font-size: 17px;
}
.tablicolor {
  color: #409eff;
  border-bottom: 2px solid #409eff;
}
.classify {
  width: 229px;
  text-align: center;
}
.classify button {
  margin-top: 10px;
  border-radius: 10px;
  padding: 10px;
  font-size: 20px;
  background-color: #f56c6c;
  outline: none;
  border: none;
  color: #fff;
  cursor: pointer;
}
.classify ul {
  height: 600px;
  overflow: auto;
  padding: 10px;
}
.classify li {
  padding: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid #f56c6c;
}
.classify h1 {
  color: #409eff;
  border-bottom: 1px solid #409eff;
  width: 160px;
  margin: 0 auto;
  padding-bottom: 10px;
}
.classify img {
  width: 100%;
}
.total {
  color: red;
}

/* 组件过渡 */
.fade-enter {
  opacity: 0;
  transform: translateX(60px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-60px);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}

.move-enter,
.move-leave-to {
  opacity: 0;
  transform: translateY(60px);
}
.move-enter-active,
.move-leave-active {
  transition: all 0.4s;
}

.del-enter,
.del-leave-to {
  opacity: 0;
  transform: translateX(60px);
}
.del-enter-active,
.del-leave-active {
  transition: all 0.4s;
  position: absolute;
}

.del-move {
  transition: transform 0.6s;
}
</style>
