/*
 * @Description: 工具类 - 函数方法
 * @Author: flq
 * @Date: 2020-03-01 18:57:41
 * @LastEditors: ''
 * @LastEditTime: 2020-03-01 22:19:27
 */
import { isString } from 'lodash'

export default {
  /**
   * @description 从url上取参数
   * @Author      LiSuwan
   * @DateTime    2018-11-20T15:18:14+0800
   */
  getRequest () {
    var url = location.search // 获取url中"?"符后的字串
    var theRequest = {}
    if (url.indexOf('?') !== -1) {
      var str = url.substr(1)
      let strs = str.split('&')
      for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
      }
    }
    return theRequest
  },
  /**
   * @description 获取数组对象的key
   * @Author      LiSuwan
   * @DateTime    2018-09-27T14:16:48+0800
   * @param       {Array}                 arr:处理的数据
   * @return      {Array}                 keys：数组对象的key
   */
  getArryKey (arr) {
    let keys = []
    arr.forEach((v) => {
      Object.keys(v).forEach(val => {
        if (val === 'id' || val === 'name') { keys.push(val) }
      })
    })
    return keys
  },
  /**
   * @Description:取消按钮与确定按钮弹窗
   * @Author: LiSuwan
   * @param {object} that:this的作用，必填
   * @param {string} content:弹窗提示语的内容，必填
   * @param {object} options:confirm的配置，可选
   * @Date: 2019-04-11 14:19:15
   */
  confirm (that, content, { title = '', confirmButtonText = '确定', cancelButtonText = '取消', showClose = false, type = 'warning', closeOnClickModal = false, dangerouslyUseHTMLString = true, distinguishCancelAndClose = false } = {}) {
    return that.$confirm(content, title, {
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
      dangerouslyUseHTMLString: dangerouslyUseHTMLString,
      showClose: showClose,
      type: type,
      closeOnClickModal: closeOnClickModal,
      distinguishCancelAndClose: distinguishCancelAndClose
    })
  },
  /**
   * @Description:确定按钮弹窗
   * @Author: LiSuwan
   * @param {object} that:this的作用，必填
   * @param {string} content:弹窗提示语的内容，必填
   * @param {object} options:confirm的配置，可选
   * @Date: 2019-04-11 14:19:15
   */
  alertHtml (that, content, { showClose = false, type = 'warning', dangerouslyUseHTMLString = true } = {}) {
    return that.$alert(content, {
      dangerouslyUseHTMLString: dangerouslyUseHTMLString,
      showClose: showClose,
      type: type
    })
  },
  /**
   * @Description: 获取字符串长度，中文2位，其他1位
   * @param {string} str - 字符串
   * @return: {number} 字符串长度
   * @Author: ZhangJQ
   * @LastEditors: ZhangJQ
   * @LastEditTime: Do not edit
   * @Date: 2019-04-17 19:07:23
   */
  getStringLength (str = '') {
    if (!isString(str)) {
      return console.warn('getStringLength 方法只支持字符串')
    }
    var stringCopy = str.replace(/(^\s*)|(\s*$)/g, '')
    return stringCopy.replace(/[\u4e00-\u9fa5]/g, 's').length
  }
}
