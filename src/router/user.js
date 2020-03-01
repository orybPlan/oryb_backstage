/*
 * @Description: 用户
 * @Author: flq
 * @Date: 2020-03-01 20:15:40
 * @LastEditors: ''
 * @LastEditTime: 2020-03-01 22:45:13
 */
const User = () => import('../views/user/index')

export default [
  {
    path: '/user',
    name: 'user',
    component: User,
    meta: {
      requireAuth: true,
      name: '用户'
    }
  }
]