import * as React from 'react'
export default [
    {
        component: React.lazy(() => import('../pages/items/catalog')),
        exact: true,
        path:'/items',
    },
    {
      component: React.lazy(() => import('../pages/items/category')),
      exact: true,
      path:'/items-category',
  },
]
