import axios from '@/axios'
import api from '@/api'

export const login = (username, password) => {
  return axios.request({
    method: api.login.method,
    url: api.login.url,
    data: {
      username,
      password
    }
  })
}

export const logout = () => {
  return axios.request({
    method: api.logout.method,
    url: api.logout.url
  })
}
