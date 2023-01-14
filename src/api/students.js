//学生列表查询接口

import { get } from '../api/api'


export function students(params) {
    return get('/students',params)
}