export default {
  mockSuccess: (data, msg, ext) => {
    /* eslint-disable-next-line */
    console.log('Mock Triggered: ', { data, msg, ext })
    return {
      code: process.env.VUE_APP_HTTP_OK,
      data: data || '',
      msg: msg || 'OK',
      ext: ext || []
    }
  }
}
