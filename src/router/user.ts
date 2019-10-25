import * as React from 'react'
export default [
    {
        component: React.lazy(() => import('../pages/user/my')),
        exact: true,
        path:'/my',
    },

]
