import * as React from 'react'
export default [
    {
        component: React.lazy(() => import('../pages/home')),
        exact: true,
        path:'/home',
    },
]
