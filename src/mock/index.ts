

import Mock from 'mockjs'

Mock.mock(RegExp(`/mock/test/.*`), 'post', {
  'code': 200,
  'message': '',
  'status': 'success'
})
