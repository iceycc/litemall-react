import * as React from 'react'
export default [

    {
        component: React.lazy(() => import('../pages/order')),
        exact: true,
        name:'order',
        path:'/order',
    },
    {
        component: React.lazy(() => import('../pages/home')),
        exact: true,
        name:'home',
        path:'/home',
    },
]
