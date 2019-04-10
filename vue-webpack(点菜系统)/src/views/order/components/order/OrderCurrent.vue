<template>
<div>
    <p class='total' v-if='getOrderList.length'>总价：{{getTotalPrice | moneyFormat}}（元）</p>
    <ul class='order-ul'>
      <li class='fl'>商品名称</li>
      <li class='fl'>数量</li>
      <li class='fl'>价格</li>
      <li class='fl'>操作</li>
    </ul>
  
    <ul class='order-ul' v-for='item of getOrderList' :key='item.id'>
      <li class='fl'>
          <span>{{item.name}}</span>
      </li>
      <li class='fl'>
          <span>{{item.count}}</span>
      </li>
      <li class='fl'>
          <span>{{item.price}}</span>
      </li>
      <li class='fl'>
          <span class='operation'>
            <span @click='del(item)'>删除</span>
            <span @click='reduce(item)'>-</span>
            <span @click='add(item)'>+</span>
          </span>
      </li>
    </ul>
</div>
</template>

<script>
export default {
  computed: {
    getOrderList() {
      return this.$store.state.orderList;
    },
    getTotalPrice() {
      let total = 0;
      this.getOrderList.map(function(item) {
        total += item.count * item.price;
      });
      return total;
    }
  },
  methods: {
    del(item) {
      this.$store.commit("del", item);
    },
    reduce(item) {
      this.$store.commit("decrement", item);
    },
    add(item) {
      this.$store.commit("increment", item);
    }
  }
};
</script>
<style scoped>
</style>

