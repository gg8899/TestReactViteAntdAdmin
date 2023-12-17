// test.ts
/* 
    TODO 注意：
    1、安装 mock 的版本的问题，3.0.0+版本不支持 vite 的使用，里面有ReferenceError: require is not defined 的相关报错。

*/
import { MockMethod, MockConfig } from 'vite-plugin-mock'
export default [
    {
        url: '/api/get',
        method: 'get',
        response: ({ query }) => {
            return {
                code: 0,
                data: {
                    name: 'vben',
                },
            }
        },
    },
    {
        url: '/api/post',
        method: 'post',
        timeout: 2000,
        response: {
            code: 0,
            data: {
                name: 'vben',
            },
        },
    },
    {
        url: '/api/text',
        method: 'post',
        rawResponse: async (req, res) => {
            let reqbody = ''
            await new Promise((resolve) => {
                req.on('data', (chunk) => {
                    reqbody += chunk
                })
                req.on('end', () => resolve(undefined))
            })
            res.setHeader('Content-Type', 'text/plain')
            res.statusCode = 200
            res.end(`hello, ${reqbody}`)
        },
    },
] as MockMethod[]

/* export default function (config: MockConfig) {
    return [
        {
            url: '/api/text',
            method: 'post',
            rawResponse: async (req, res) => {
                let reqbody = ''
                await new Promise((resolve) => {
                    req.on('data', (chunk) => {
                        reqbody += chunk
                    })
                    req.on('end', () => resolve(undefined))
                })
                res.setHeader('Content-Type', 'text/plain')
                res.statusCode = 200
                res.end(`hello, ${reqbody}`)
            },
        },
    ]
} */