import { lazy } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from '@/App'
import suspenser from '@/router/suspenser'
import Loading from '@/components/fallbackUI/Loading'
import routes from '@/router/routes'

const ErrorRazy = lazy(() => import('@/page/Error'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={suspenser(<App />, <Loading />)}>
      {/* 1Depth Menu */}
      {routes.map((route) => (
        // 2Depth Menu
        <Route key={route.id} path={route.path} element={route.element}>
          {route.children?.map((childRoute) => <Route key={childRoute.id} path={childRoute.path} element={childRoute.element} />)}
        </Route>
      ))}
      <Route path="/*" element={<ErrorRazy />} />
    </Route>,
  ),
)

export default router
