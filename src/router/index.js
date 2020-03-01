/*
 * @Description: 路由中心
 * @Author: flq
 * @Date: 2020-03-01 19:56:08
 * @LastEditors: ''
 * @LastEditTime: 2020-03-01 21:55:41
 */
import Vue from 'vue'
import Router from 'vue-router'
import login from './login'
import home from './home'

Vue.use(Router)

export default new Router({
  routes: [
    ...login,
    ...home
  ]
})
