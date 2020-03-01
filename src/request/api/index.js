/*
 * @Description: api接口统一出口
 * @Author: flq
 * @Date: 2020-03-01 19:21:09
 * @LastEditors: ''
 * @LastEditTime: 2020-03-01 19:35:13
 */
import login from './login'
import user from './user'
import style from './style'
import room from './room'
import product from './product'
import category from './category'


let urlConfig = Object.assign( // 合并对象
  login,
  user,
  style,
  room,
  product,
  category
)

export default urlConfig
