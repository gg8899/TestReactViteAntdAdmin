import axios from 'axios'
import { message } from 'antd';
const request = axios.create({
    // baseURL: '/api',
    timeout: 5000,
})


// 添加请求拦截器
/* request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 携带token
    const userStore = useUserStore();
    const token = userStore.userInfo.token
    if (token) {
        config.headers.token = token;
    }
    return config;
}); */

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么

    return response.data;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么

    //处理http网络错误
    const status = error.response?.status;

    switch (status) {
        case 404:
            //错误提示信息
            message.error('请求失败路径出现问题')
            break;
        case 500 | 501 | 502 | 503 | 504 | 505:
            message.error('服务器挂了')
            break;
        case 401:
            message.error('参数有误')
            break;
    }
    return Promise.reject(error);
});


export default request