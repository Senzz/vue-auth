import Vue from 'vue'
import Router from 'vue-router'


import beforeEach from './beforeEach'
import { resolve } from 'path'
Vue.use(Router)

import { commonRouterMap } from './routes'

export const router = new Router({
  routes: commonRouterMap
});
router.beforeEach(beforeEach);



