<template>
<div>
  <div v-for='item1 of productsClassifyList' :key='item1.id' class='fl classify'>
    <h1>{{item1.classify}}</h1>
    <ul>
      <product-item v-for='item2 of item1.productList' :productInfo='item2' @add-product='add($event)' :key='item2.id'></product-item>
    </ul>
  </div>
</div>
</template>

<script>
import ProductItem from "./ProductItem";

export default {
  props: {
    productsClassifyList: {
      type: Array,
      required: true
    }
  },
  components: {
    ProductItem
  }
};
</script>
<style scoped>
</style>

