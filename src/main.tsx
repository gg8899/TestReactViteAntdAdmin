import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import Loading from '@/components/Loading/index.tsx'
import router from '@/router/index.tsx';
import '@/assets/normalize.css';
import { setupMock } from './mock'; //mock
// if(import.meta.env === 'development'){ 
  setupMock()//dev环境开启mock
// }

/* 
  路由搭建：
  根据文档来完成，首先搭建主页面的路由。即根路径，配置 APP 页面。
  然后根据布局，左右分割。
  左边侧边栏根据 Link 路由组件，配置点击的页面跳转。
  右边根据在根路径下面跳转都属于他们的子路由，然后在主页面配置 Outlet 路由页面嵌入的位置。
  注意：
  通过懒加载的时候，需要配合使用 suspense 组件。不然页面会报错...
  页面其他的请求暂时没配置。
*/
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)
