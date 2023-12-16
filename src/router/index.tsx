import { lazy } from "react";
import { createBrowserRouter } from 'react-router-dom'
const Home = lazy(() => import('../pages/Home/index.tsx'));
const OrderList = lazy(() => import('../pages/OrderList/index.tsx'));
const Other = lazy(() => import('../pages/Other/index.tsx'));



const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/orderList',
        element: <OrderList />,
    },
    {
        path: '/other',
        element: <Other />,
    }
];


const router = createBrowserRouter(routes);

export default router;

