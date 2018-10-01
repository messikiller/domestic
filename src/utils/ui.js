import iView from 'iview'

export default {
  getSiderList: () => {
    return require('@/navtree')
  },
  modal: (type, title, content, success) => {
    let config = {
      title,
      content
    }
    if (success) {
      config.onOk = success
    }
    iView.Modal[type](config)
  },
  notice: (type, title, desc) => {
    iView.Notice[type]({
      title,
      desc
    })
  }
}
