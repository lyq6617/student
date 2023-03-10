//项目中大多时候都会把对应的接口请求封装成api来调用（实际开发可能需要一个接口一个文件）

import service from '../service.js'


export const post = (url,params) =>{
    return service.post(url,params)
}

export const get = (url,params) =>{
    return service.get(url,{params})
}

export const del = (url,params) =>{
    return service.delete(url,params)
}

export const put = (url,params) =>{
    return service.put(url,params)
}