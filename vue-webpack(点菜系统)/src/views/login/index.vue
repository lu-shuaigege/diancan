<template>
  <div class="login">
    login
    <p><button @click='login'>登录</button></p>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login() {
      console.log(this.$route);
      this.$store.commit('setLogin');
      let name = this.$route.query.redirect || "/";
      this.$router.push({ name: name });
    }
  }
};
</script>
<style scoped>
</style>

