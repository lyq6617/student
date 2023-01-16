//信息列表查询接口

import { get } from '../api/api'

export function getInfo() {
  return get('/info')
}
