/*
 * @Description: 平台首页
 * @Author: flq
 * @Date: 2020-03-01 20:15:40
 * @LastEditors: ''
 * @LastEditTime: 2020-03-01 22:43:20
 */
const HomeIndex = () => import(/* webpackChunkName: "homeIndex" */ '../views/homeIndex/index')

export default [
  {
    path: '/home/index',
    name: 'homeIndex',
    component: HomeIndex,
    meta: {
      requireAuth: true,
      name: '首页'
    }
  }
]
