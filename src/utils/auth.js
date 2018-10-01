export default {
  getToken: function () {
    return window.localStorage.getItem(process.env.VUE_APP_TOKEN_KEY) || ''
  },
  setToken: function (token) {
    window.localStorage.setItem(process.env.VUE_APP_TOKEN_KEY, token)
  }
}
