<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-if='!isLogin'>
      <router-link :to="{ path: '/login' }">登录</router-link> 
    </h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    msg() {
      const userInfo = this.$store.state.user.userInfo;
      return `Hello,${ userInfo ? userInfo.name : "游客" }`;
    },
    isLogin() {
      return !!this.$store.state.user.userInfo;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
