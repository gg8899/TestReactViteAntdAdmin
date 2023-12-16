import { lazy } from "react";
import { createBrowserRouter } from 'react-router-dom'
import App from '../App.tsx'
import ErrorPage from '../pages/ErrorPage/index.tsx'
const Home = lazy(() => import('../pages/Home/index.tsx'));
const OrderList = lazy(() => import('../pages/OrderList/index.tsx'));
const Other = lazy(() => import('../pages/Other/index.tsx'));



const routes = [
    {
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
      ]
    }
  ]


const router = createBrowserRouter(routes);

export default router;

