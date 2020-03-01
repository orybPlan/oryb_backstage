/*
 * @Description: 分类
 * @Author: flq
 * @Date: 2020-03-01 22:12:38
 * @LastEditors: ''
 * @LastEditTime: 2020-03-01 22:40:48
 */
const Category = () => import('../views/category/index.vue')

export default [
  {
    path: '/category',
    name: 'category',
    component: Category,
    meta: {
      requireAuth: true,
      name: '分类'
    }
  }
]
