import HelloWorld from '@/views/HelloWorld'
import Login from '@/views/Login'

export const commonRouterMap = [
  {
    path: '/',
    name: 'HelloWorld',
    cn: "首页",
    component: HelloWorld,
  },
  {
    path: '/login',
    name: "Login",
    cn: false,
    component: Login
  },
  {
    path: "/readme",
    name: "readme",
    cn: "readme",
    component: (resolve) => require(['@/views/readme'], resolve)
  },
  {
    path: '/404',
    cn: false,
    component: (resolve) => require(['@/views/404'], resolve)
  },
  
  {
    path: "*",
    cn: false,
    redirect: '/404'
  }
];

export const asyncRouterMap = [
  {
    path: '/admin',
    name: 'admin',
    cn: "管理员",
    component: (resolve) => require(['@/views/admin'], resolve) ,
    meta: {
      roles: ['admin']
    }
  },
  {
    path: '/ordinary',
    name: 'ordinary',
    cn: "普通用户",
    component: (resolve) => require(['@/views/ordinary'], resolve) ,
    meta: {
      roles: ['ordinary', 'admin']
    }
  }
]