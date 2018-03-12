import Vue from 'vue'
import Vuex from 'vuex'

import permissionsRoutes from "./permissionsRoutes"
import user from './user'

Vue.use(Vuex)

const store = new Vuex.Store({  
  modules: {
    permissionsRoutes,
    user
  }
})

export default store