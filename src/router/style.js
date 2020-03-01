/*
 * @Description: 风格
 * @Author: flq
 * @Date: 2020-03-01 22:13:26
 * @LastEditors: ''
 * @LastEditTime: 2020-03-01 22:44:10
 */
const Style = () => import('../views/style/index.vue')

export default [
  {
    path: '/style',
    name: 'style',
    component: Style,
    meta: {
      requireAuth: true,
      name: '风格'
    }
  }
]