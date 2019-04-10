<template>
  <div class="slideBar">
    <ul>
      <li>
        <router-link to='/order'>点菜</router-link>
      </li>
       <li>
        <router-link to='/menu2'>菜单2</router-link>
      </li>
       <li>
        <router-link to='/menu3'>菜单3</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "slideBar",
  data() {
    return {};
  }
};
</script>
<style scoped>
.slideBar {
  width: 100px;
  height: 100%;
  background-color: #f56c6c;
}
.slideBar li {
  border-bottom: 1px solid #fff;
}
.slideBar a {
  display: block;
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  padding: 20px 0;
}
.slideBar a.router-link-active {
  color: #000;
}
</style>

