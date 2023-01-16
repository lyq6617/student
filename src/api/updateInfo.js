//信息列表修改接口
import qs from "qs"
import { put } from '../api/api'

export function updateInfo(data) {
  data = qs.stringify(data)
  return put('/info',data)
}
