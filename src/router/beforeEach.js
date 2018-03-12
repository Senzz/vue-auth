import store from './../store'
import { router } from './index'

const beforeEach = (to, from, next) => {
  
  const userInfo = store.state.user.userInfo;
  console.log('userInfo', userInfo)
  if(to.path === '/login') {
    userInfo ? next('/') : next();
    return;
  }
  // if(!userInfo){
  //   next('/login')
  //   return;
  // }
  const routes = store.state.permissionsRoutes.routes;

  // 登录了，且还未生成符合权限的routes
  if(userInfo && routes.length === 0){
    store.dispatch('GENERATE_ROUTES', { roles: userInfo.roles })
      .then(res => {
        router.addRoutes(res)
      })
  }
  next();

}


export default beforeEach