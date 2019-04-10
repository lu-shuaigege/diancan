<template>
<div>
    <div class='tabHeader'>
        <ul>
          <li @click='changeTab(index)' v-for='(item,index) of tabBtns' class='fl' :key='index' :class='{tablicolor:index===switchIndex}'>{{item}}</li>
        </ul>
    </div>
    <div class='tabContent'>
        <div v-for='(item,index) of tabBtns' v-if='index===switchIndex' :key='index' class='slot-con'>
          <slot :name='"tabItem"+index'></slot>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    tabBtns: {
      type: Array,
      required: true
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      switchIndex: 0
    };
  },
  created() {
    if (this.currentIndex) {
      this.switchIndex = this.currentIndex;
    }
  },
  computed: {
    activedCom() {
      return this.tabComs[this.switchIndex];
    }
  },
  methods: {
    changeTab(index) {
      this.switchIndex = index;
    }
  }
};
</script>
<style scoped>
</style>

