// test.ts
/* 
    TODO 注意：
    1、安装 mock 的版本的问题，3.0.0+版本不支持 vite 的使用，里面有ReferenceError: require is not defined 的相关报错。

*/


import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import HelloWorld from './test' //引入定义的mock模拟接口

export function setupMock () {
  // 这个是用来注册mock的，当在生产中使用mock时，很重要
  createProdMockServer([...HelloWorld])
}
