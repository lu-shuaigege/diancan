<template>
<li>
  <!-- 静态资源放入static文件夹 通过/static访问-->
    <img v-bitmap='productInfo.imgUrl' src='/static/place.jpg' />
    <p>
      <span>{{productInfo.name}}</span>
      <span>{{productInfo.price}}(元)</span>
    </p>
    <button @click='add()'>点击添加</button>
</li>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    productInfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    add() {
      this.$store.commit("add", this.productInfo);
    }
  }
};
</script>
<style scoped>
</style>

