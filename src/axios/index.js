import axios from 'axios'
import router from '@/router'
import utils from '@/utils'
import iView from 'iview'

const request = axios.create({
  baseURL: process.env.API_SERVER,
  timeout: 5000,
  headers: {
    Authorization: 'Bearer ' + utils.auth.getToken()
  }
})

request.interceptors.request.use(function (config) {
  if (process.env.VUE_APP_ENABLE_AUTH === 'T' && !utils.auth.getToken()) {
    router.replace({ name: 'authLogin' })
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

request.interceptors.response.use(function (response) {
  const code = Number(response.data.code)
  switch (code) {
    case process.env.HTTP_OK:
      return response
    case process.env.HTTP_UNAUTHORIZED:
      return iView.Modal.error({
        content: '请求出错，请联系管理员处理！',
        onOk: () => {
          router.replace({ name: 'authLogin' })
        }
      })
    case process.env.HTTP_FORBIDDEN:
      return iView.Modal.error({
        content: '你无权访问！'
      })
    default:
      return iView.Modal.error({
        content: '请求出错!'
      })
  }
}, function (error) {
  iView.Modal.error({
    content: '请求出错，请联系管理员处理！'
  })
  return Promise.reject(error)
})

export default request
