import * as React from 'react'
export default [
    {
        component: React.lazy(() => import('../pages/Items/catalog')),
        exact: true,
        path:'/items',
    },
    {
      component: React.lazy(() => import('../pages/Items/category')),
      exact: true,
      path:'/items-category',
  },
]
