/*
 * @Description: 房型
 * @Author: flq
 * @Date: 2020-03-01 22:13:12
 * @LastEditors: ''
 * @LastEditTime: 2020-03-01 22:43:05
 */
const Room = () => import('../views/room/index.vue')

export default [
  {
    path: '/room',
    name: 'room',
    component: Room,
    meta: {
      requireAuth: true,
      name: '房型'
    }
  }
]
