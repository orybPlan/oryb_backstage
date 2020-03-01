/**
 * @Description: axios封装  请求拦截、响应拦截、错误统一处理
 * @Author: flq
 * @Date: 2020-03-01 16:29:09
 */
import axios from 'axios'
import { Message } from 'element-ui'
import router from '@/router'
import tip from '@/utils/tip'
/**
 * @Description: 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 * @Author: flq
 * @Date: 2020-03-01 16:30:39
 */
const toLogin = () => {
  router.replace({
    path: '/',
    query: {
      // redirect: router.currentRoute.fullPath
      redirect: router.fullPath // 本次迭代暂定跳转到首页
    }
  })
}
/**
   * @Description: 接口返回值错误处理  无权限时清空sessionStorage中的toke
   * @Author: flq
   * @param {number} status:状态返回值
   * @param {String} other:状态返回描述
   * @Date: 2020-03-01 16:31:23
   */
let isShowErrorTips = true
const errorHandle = (status, other) => {
  let message = other
  switch (status) {
    case '401':
      message = tip.noNuthority
      // let curToken = sessionStorage.getItem('Authorization')
      // if (curToken) {
      //   sessionStorage.removeItem('Authorization')
      // }
      // setTimeout(() => {
      //   toLogin()
      //   isShowErrorTips = true
      // }, 1000)
      showErrorTips(message)
      break
    case '404':
      message = tip.networkError
      setTimeout(() => {
        toLogin()
        isShowErrorTips = true
      }, 1000)
      showErrorTips(message)
      break
    case '10032':
      Message.error(other)
      break
    default: console.log(other)
      Message.error(other)
      break
  }
}
const showErrorTips = (msg) => {
  if (isShowErrorTips) {
    Message.error(msg)
    isShowErrorTips = false
  }
}

var instance = axios.create({ timeout: 1000 * 12 }) // 设置超时
axios.defaults.headers['Accept-Language'] = 'zh-CN'
axios.defaults.baseURL = 'http://47.103.44.69:8080/door'
// axios.defaults.baseURL = 'http://10.125.23.68:10004/common-api/api/v1.0'

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
  config => {
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    const tokenSesstion = window.sessionStorage.getItem('Authorization')
    tokenSesstion && (config.headers.Authorization = tokenSesstion)
    return config
  },
  error => Promise.error(error))

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  res => {
    res.status === 200 ? Promise.resolve(res) : Promise.reject(res)
    return res
  },
  // 请求失败
  error => {
    const { response } = error
    if (response) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.status, response.data.message)
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      alert(tip.networkError)
      return false
    }
  })

var request = {
  /**
   * @Description: axios的post请求方法
   * @Author: flq
   * @param {Object} obj.url:请求路径，obj.params:请求参数，默认值是null
   * @Date: 2020-03-01 19:18:06
   */
  post: (obj) => {
    return new Promise(function (resolve, reject) {
      let { url, params = null } = obj
      return instance.post(url, params).then(res => {
        if (res) {
          if (res.data.code === '200') {
            resolve(res.data)
          } else {
            errorHandle(res.data.code, res.data.msg)
            reject(res.data)
          }
        }
      }).catch((e) => {
        console.log(e)
      }).finally(() => {
      })
    })
  },
  /**
   * @Description: axios的get请求方法 以"/"的方式拼接url
   * @Author: flq
   * @param {Object} obj.url:请求路径，obj.params:请求参数，默认值是null
   * @Date: 2020-03-01 19:17:17
   */
  get: (obj) => {
    return new Promise(function (resolve) {
      let { url, params = '', option = null } = obj
      if (params instanceof Object) { // 把对象转换成字符串
        let paramsArray = Object.values(params)
        params = paramsArray.join('/')
      }
      return instance.get(url + params, option).then(res => {
        if (res) {
          if (res.data.code === '200') {
            resolve(res.data)
          } else {
            errorHandle(res.data.code, res.data.msg)
          }
        }
      }).catch((e) => {
        console.log(e)
      }).finally(() => {
      })
    })
  },
  /**
   * @Description: axios的get请求方法 多个参数，以问号的方式拼接
   * @Author: flq
   * @param {Object} obj.url:请求路径，obj.params:请求参数，默认值是null
   * @Date: 2020-03-01 19:16:38
   */
  getParams: (obj) => {
    return new Promise(function (resolve) {
      let { url, params = '' } = obj
      return instance.get(url, { params: params }).then(res => {
        if (res) {
          if (res.data.code === '200' || res.data.code === '404' || res.data.code === '205') {
            resolve(res.data)
          } else {
            errorHandle(res.data.code, res.data.msg)
          }
        }
      }).catch((e) => {
        console.log('error', e)
      }).finally(() => {
      })
    })
  },
  /**
   * @Description: axios的put请求方法
   * @Author: flq
   * @param {Object} obj.url:请求路径，obj.params:请求参数，默认值是null
   * @Date: 2020-03-01 19:14:49
   */
  put: (obj) => {
    return new Promise(function (resolve) {
      let { url, params = '' } = obj
      return instance.put(url + params).then(res => {
        if (res) {
          if (res.data.code === '200') {
            resolve(res.data)
          } else {
            errorHandle(res.data.code, res.data.msg)
          }
        }
      }).catch((e) => {
        console.log(e)
      }).finally(() => {
      })
    })
  },
  /**
   * @Description: axios的get请求方法 以"/"的方式拼接url
   * @Author: flq
   * @param {Object} obj.url:请求路径，obj.params:请求参数，默认值是null
   * @Date: 2020-03-01 19:13:03
   */
  delete: (obj) => {
    return new Promise(function (resolve) {
      let { url, params = '' } = obj
      if (params instanceof Object) { // 把对象转换成字符串
        let paramsArray = Object.values(params)
        params = paramsArray.join('/')
      }

      return instance.delete(url + params).then(res => {
        if (res) {
          if (res.data.code === '200') {
            resolve(res.data)
          } else {
            errorHandle(res.data.code, res.data.msg)
          }
        }
      }).catch((e) => {
        console.log(e)
      }).finally(() => {

      })
    })
  },
  /**
   * @Description: axios的delete请求方法 多个参数，以问号的方式拼接
   * @Author: flq
   * @param {Object} obj.url:请求路径，obj.params:请求参数，默认值是null
   * @Date: 2020-03-01 19:12:14
   */
  deleteParams: (obj) => {
    return new Promise(function (resolve) {
      let { url, params = '' } = obj
      return instance.delete(url, { params: params }).then(res => {
        if (res) {
          if (res.data.code === '200') {
            resolve(res.data)
          } else {
            errorHandle(res.data.code, res.data.msg)
          }
        }
      }).catch((e) => {
        console.log(e)
      }).finally(() => {
      })
    })
  },
  putWithBody: (obj) => {
    return new Promise(function (resolve) {
      let { url, params = '' } = obj
      return instance.put(url, params).then(res => {
        if (res) {
          if (res.data.code === '200') {
            resolve(res.data)
          } else {
            errorHandle(res.data.code, res.data.msg)
          }
        }
      }).catch((e) => {
        console.log(e)
      }).finally(() => {
      })
    })
  },
  deleteWithBody: (obj) => {
    return new Promise(function (resolve, reject) {
      let { url, data } = obj
      return instance.delete(url, data).then(res => {
        if (res) {
          if (res.data.code === '200') {
            resolve(res.data)
          } else {
            errorHandle(res.data.code, res.data.msg)
            reject(res.data)
          }
        }
      }).catch((e) => {
        console.log(e)
      }).finally(() => {
      })
    })
  }
}
export default request
