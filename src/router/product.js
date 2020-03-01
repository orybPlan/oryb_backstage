/*
 * @Description: 产品
 * @Author: flq
 * @Date: 2020-03-01 22:12:52
 * @LastEditors: ''
 * @LastEditTime: 2020-03-01 22:41:57
 */
const Product = () => import('../views/product/index.vue')

export default [
  {
    path: '/product',
    name: 'product',
    component: Product,
    meta: {
      requireAuth: true,
      name: '产品'
    }
  }
]
