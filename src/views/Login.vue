<template>
  <div class="login">
    <div>
      <el-input type="text" v-model="user" placeholder="user" name='user' size='medium' />
    </div>
    <div>
      <el-input type="pass" v-model='pass' placeholder="password" name='pass' />
    </div>
    <div class='login-btn'>
      <el-button @click='login' type="primary" size='medium'>登录</el-button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user: '',
      pass: ''
    }
  },
  methods: {
    login() {
      console.log(this.$store)
      this.$store.dispatch('FETCH_USER_INFO', {
        user: this.user,
        pass: this.pass
      }).then(res => {
        this.$message({
          type: 'success',
          message: `${res.msg}`
        });
        setTimeout(() => {
          this.$router.push('/');
        }, 30)
        
      }).catch(err => {
        console.log(err);
        this.$message({
          message: err.msg,
          type: 'error'
        });
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 400px;
  height: 500px;
  margin: 300px auto;
  
  .login-btn{
    margin-top: 20px;
  }
}
</style>
