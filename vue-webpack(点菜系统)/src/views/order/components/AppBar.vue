<template>
  <div>
    <h1 class='barTitle'>{{barTitle}}</h1>
    <slot name='order'></slot>
    <slot name='product'></slot>
  </div>
</template>

<script>
export default {
  props: {
    barTitle: {
      type: String,
      required: true
    }
  }
};
</script>
<style scoped>
</style>

