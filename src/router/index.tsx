import { lazy } from "react";
import { createBrowserRouter } from 'react-router-dom'
import App from '../App.tsx'
import ErrorPage from '../pages/ErrorPage/index.tsx'
import funtions from '../function.json'
const Home = lazy(() => import('../pages/Home/index.tsx'));
const OrderList = lazy(() => import('../pages/OrderList/index.tsx'));
const Other = lazy(() => import('../pages/Other/index.tsx'));
const PlayGames = lazy(() => import('../pages/PlayGames/index.tsx'))

console.log(funtions)
const getRoutes = (items) => {
  if (!Array.isArray(items)) return;
  return items.map(item => {
    const Comp = lazy(() => import(`../pages/${item.element}/index.tsx`))
    return ({
      key: item.path,
      path: item.path,
      element: item.path === '/' ? <App /> : <Comp />,
      children: getRoutes(item?.children)
    })
  })
}
// console.log(getRoutes(funtions));

const routes = [
  {
    // 需要重定向到 home 组件页面。
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'orderList',
        element: <OrderList />,
      },
      {
        path: 'other',
        element: <Other />,
      }
    ],
    // children
  },
  {
    path: '/playGames',
    element: <PlayGames></PlayGames>,
  }
]


const router = createBrowserRouter(getRoutes(funtions));

export default router;

