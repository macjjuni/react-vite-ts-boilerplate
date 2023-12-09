import { lazy } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from '@/entry/App'
import suspenser from '@/router/suspenser'
import Loading from '@/components/fallbackUI/Loading'
import routes from '@/router/route'

const ErrorRazy = lazy(() => import('@/pages/Error'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={suspenser(<App />, <Loading />)}>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
      <Route path="/*" element={<ErrorRazy />} />
    </Route>,
  ),
)

export default router
