//项目中大多时候都会把对应的接口请求封装成api来调用（实际开发可能需要一个接口一个文件）

import service from '../service.js'


export const post = (url,params) =>{
    return service.post(url,params)
}