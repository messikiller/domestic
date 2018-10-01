import Mock from 'mockjs'
import api from '@/api'
import * as mocks from './mocks'

for (var key in api) {
  if (api.hasOwnProperty(key) && key in mocks) {
    Mock.mock(RegExp(api[key].url), api[key].method, mocks[key])
  }
}

export default Mock
