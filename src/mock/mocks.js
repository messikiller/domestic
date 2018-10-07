import utils from '@/utils'
import Mock from 'mockjs'

const random = Mock.Random

export const login = (options) => {
  return utils.request.mockSuccess({
    token: random.string(128),
    username: options.body.username,
    expired_at: random.natural(10000, 99999999)
  })
}

export const logout = (options) => {
  return utils.request.mockSuccess('OK')
}
