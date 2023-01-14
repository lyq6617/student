//学生列表删除接口

import {del } from '../api/api'

export function studentDel(id) {
    return del(`/students/${id}`)
}