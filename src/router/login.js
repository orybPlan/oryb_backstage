/*
 * @Description: 登录页面
 * @Author: flq
 * @Date: 2020-03-01 20:15:40
 * @LastEditors: ''
 * @LastEditTime: 2020-03-01 22:43:13
 */
const Login = () => import('../views/login/index')

export default [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requireAuth: false,
      name: '登录页'
    }
  }
]
