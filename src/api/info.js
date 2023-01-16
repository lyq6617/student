//信息列表新增接口
import qs from "qs"
import { post } from '../api/api'

export function info(data) {
  data = qs.stringify(data)
  return post('/info',data)
}
