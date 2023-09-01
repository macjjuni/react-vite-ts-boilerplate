import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from '@/App'

const HomeRazy = React.lazy(() => import('@/pages/Home'))
const UserRazy = React.lazy(() => import('@/pages/User'))
// const ProfileRazy = React.lazy(() => import('@/pages/User/Profile'))
// const AccountRazy = React.lazy(() => import('@/pages/User/Account'))
const ErrorRazy = React.lazy(() => import('@/pages/Error'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="" element={<HomeRazy />} />
      <Route path="/user" element={<UserRazy />} />
      <Route path="/*" element={<ErrorRazy />} />
    </Route>,
  ),
)

export default router
