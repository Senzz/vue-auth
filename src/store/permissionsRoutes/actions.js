import { asyncRouterMap } from '@/router/routes'

export function GENERATE_ROUTES ({ commit, dispatch, state}, { roles }) {
  const routes = generate_routes(asyncRouterMap, roles);
  return new Promise((resolve, reject) => {
    dispatch('SET_ROUTES', { routes })
    resolve(asyncRouterMap)
  })
}

export function SET_ROUTES ({ commit, dispatch, state}, { routes }) {
  commit('SET_ROUTES', { routes: routes })
}

function generate_routes(routes, roles) {
  const result = [];

  routes.forEach(route => {
    const meta = route.meta;
    if( meta && meta.roles ) {
      const isInclude = meta.roles.some(role => roles.includes(role));
      console.log(isInclude)
      if(isInclude) {
        if(route.children) {
          route.children = generate_routes(route.children, roles);
        }
        result.push(route)
      }
      return;
    } 
    result.push(route);
  });

  return result;
}

