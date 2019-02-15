import https from '@/common/http/interface'

/**
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * handle [boolean] 如果需要自己处理 catch 请求 ，传入 true ，交给接口统一处理 ，请传如 false或不传
 * token [boolean] 如果请求需要token ，传入 true ，交给接口统一处理 ，请传如 false或不传
 */

// 单独导出
export const sendCode = (data) => {
    return https({
        url: '/auth/sendCode1',
        method: 'GET',
        data,
    })
}

// 默认全部导出
export default {
    sendCode
}