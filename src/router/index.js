/*
 * @Description: 路由中心
 * @Author: flq
 * @Date: 2020-03-01 19:56:08
 * @LastEditors: ''
 * @LastEditTime: 2020-03-03 23:13:33
 */
import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import('@/views/login')
const Home = () => import('@/views/home')
const HomeIndex = () => import('@/views/homeIndex')
const Page404 = () => import('@/views/page404')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: 'homeIndex',
          name: 'homeIndex',
          component: HomeIndex,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '*',
      name: 'page404',
      component: Page404,
      meta: { 
        requireAuth: false
      }
    }
  ]
})
