<template>
<div>
    <ul class='order-ul'>
      <li class='fl'>单号</li>
      <li class='fl'>桌号</li>
      <li class='fl'>金额</li>
    </ul>
    <ul v-for='item of orderCustomData' class='order-ul' :key='item.id'>
      <li class='fl'>
        <span>{{item.orderNum}}</span>
      </li>
      <li class='fl'>
        <span>{{item.tableNum}}</span>
      </li>
      <li class='fl'>
        <span>{{item.money}}</span>
      </li>
    </ul>
</div>
</template>

<script>
export default {
  props: {
    orderCustomData: {
      type: Array
    }
  }
};
</script>
<style scoped>
</style>

