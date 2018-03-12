<template>
  <el-menu
    default-active="0"
    class="el-menu-vertical-demo">
    <template>
      <el-menu-item v-for='(route, index) in routes' :key='route.cn' :index="index.toString()" @click="jump(route.path)">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{route.cn}}</span>
        </template>
      </el-menu-item>
    </template>
    
  </el-menu>
</template>

<script>
export default {
  computed: {
    routes() {
      const permissionsRoutes = this.$store.state.permissionsRoutes;
      return permissionsRoutes.commonRoutes.concat(permissionsRoutes.routes).filter(route => route.cn)
    }
  },
  created() {
    console.log('routes', this.routes);
  }
}
</script>
