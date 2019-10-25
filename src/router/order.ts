import * as React from 'react'
export default [
    {
        component: React.lazy(() => import('../pages/order/cart')),
        exact: true,
        path:'/order-cart',
    },

]
