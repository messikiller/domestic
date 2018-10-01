import axios from 'axios'
import router from '@/router'
import utils from '@/utils'

// 初始化请求，每次发起请求是默认带上token
const request = axios.create({
  baseURL: process.env.VUE_APP_API_SERVER,
  timeout: 5000,
  headers: {
    Authorization: 'Bearer ' + utils.auth.getToken()
  }
})

// 请求拦截器，发起请求前检查token，否则跳转到登录页面
request.interceptors.request.use(function (config) {
  if (process.env.VUE_APP_ENABLE_AUTH === 'T' && !utils.auth.getToken()) {
    router.replace({ name: 'authLogin' })
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 根据返回状态码响应请求
request.interceptors.response.use(function (response) {
  const code = String(response.data.code)
  switch (code) {
    case process.env.VUE_APP_HTTP_OK:
      return response
    case process.env.VUE_APP_HTTP_UNAUTHORIZED:
      return utils.ui.modal('error', '错误', '请先登录系统！', () => router.replace({ name: 'authLogin' }))
    case process.env.VUE_APP_HTTP_FORBIDDEN:
      return utils.ui.modal('info', '提醒', '你无权访问！')
    default:
      return utils.ui.modal('error', '错误', '请求出现未知出错，尽快联系管理员处理!')
  }
}, function (error) {
  utils.ui.modal('error', '错误', '请求失败，请联系管理员处理！')
  return Promise.reject(error)
})

export default request
