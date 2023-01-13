import { post } from '../api/api'


//登录接口
export function login(data) {
    return post('/login',data)
}