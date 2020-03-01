/*
 * @Description: 平台首页
 * @Author: flq
 * @Date: 2020-03-01 20:03:36
 * @LastEditors: ''
 * @LastEditTime: 2020-03-01 22:34:26
 */
import homeIndex from './homeIndex' // 首页
import user from './user' // 用户
import style from './style'// 风格
import room from './room' // 房间
import product from './product' // 产品
import category from './category' // 分类

const Home = () => import('../views/home/index')

export default [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: '/home/index',
    meta: {
      requireAuth: true
    },
    children: [
      ...homeIndex,
      ...user,
      ...style,
      ...room,
      ...product,
      ...category
    ]
  }
]
