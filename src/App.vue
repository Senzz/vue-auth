<template>
  <div id="app">
    <el-row :gutter="12">
      <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="4">
        <Sidebar />
      </el-col>
      <el-col :xs='18' :sm='18' :md='20' :lg='20' :xl='20'>
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
export default {
  name: 'App',
  data () {
    return {
      count: 0
    }
  },
  created(){
    const user = 'admin'
    if(user === 'admin'){
      // console.log(this.$router)
      // this.$router.addRoutes(adminRoutes)
    } else {
      // this.$router.addRoutes(otherRoutes)
    }
    
  },
  components: {
    Sidebar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
