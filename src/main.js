/*
 * @Module: 
 * @FileName: 
 * @Description: 
 * @Author: flq
 * @Date: 2020-02-27 22:34:21
 * @LastEditors: ''
 * @LastEditTime: 2020-03-03 23:41:59
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import request from './request/http'
import urlConfig from './request/api/index'
import ElementUI from 'element-ui'
import tip from './utils/tip' // 提示语
import utils from './utils/utils' // 工具类函数

import '@/assets/stylus/common.styl' // 公共的样式文件
import 'element-ui/lib/theme-chalk/index.css' // elementUI的样式

/** ========= VUE全局变量 start ========= **/
Vue.prototype.$api = request
Vue.prototype.$urlConfig = urlConfig
Vue.prototype.$tip = tip
Vue.prototype.$utils = utils
/** ========= VUE全局变量 start ========= **/

Vue.use(ElementUI)

Vue.config.productionTip = false

/**
 * @Description: 路由拦截器
 * @Author: flq
 * @Date: 2020-03-01 22:08:57
 */
// router.beforeEach((to, from, next) => {
//   if (to.matched.length !== 0) {
//     if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//       if (sessionStorage.getItem('Authorization')) { // 判断token是否存在
//         next()
//       } else {
//         next({
//           path: '/',
//           query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
//         })
//       }
//     } else {
//       next()
//     }
//   } else {
//     next({
//       path: '/',
//       query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
//     })
//   }
// })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
