
const crypto = require('crypto')

function md5(str) {
  return crypto.createHash('md5').update(str).digest('hex')
}

// 相当于从数据库拿
const users = {
  admin: {
    name: "管理员",
    roles: ["admin"],
    pass: md5('admin')
  },
  sen: {
    name: 'sen',
    roles: ["admin"],
    pass: md5('admin')
  },
  ordinary: {
    name: '普通用户',
    roles: ["ordinary"],
    pass: md5('ordinary')
  }
}

export function FETCH_USER_INFO({state, dispatch, commit}, { user, pass }) {
  // 模拟请求api
  return new Promise((resolve, reject) => {
    const userInfo = users[user];

    if(userInfo && userInfo.pass === md5(pass) ) {
      commit('SET_USER_INFO', { userInfo });
      resolve({
        status: 200,
        msg: "登录成功",
        content: [userInfo],
      });
    } else {
      reject({
        status: 403,
        msg: "账号密码错误"
      })
    }
  })
}
