import axios from 'axios'

const request = axios.create({
    // baseURL: '/api',
    timeout: 5000,
})

/* 
    拦截器处理
*/


export default request