import * as mutations from './mutations'
import * as actions from './actions'

import { commonRouterMap } from '@/router/routes'

const permissionsRoutes = {
  state: {
    commonRoutes: commonRouterMap,
    routes: []
  },
  getters: {
    
  },
  actions,
  mutations
}

export default permissionsRoutes