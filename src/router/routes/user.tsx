import { lazy } from 'react'
import type { IRoute } from '.'
import suspenser from '@/router/suspenser'
import Loading from '@/components/fallbackUI/Loading'

// Start - [Define Pages]

const UserLayoutRazy = lazy(() => import('@/layout/UserLayout'))
const HomeRazy = lazy(() => import('@/page/User/Home'))
const AboutRazy = lazy(() => import('@/page/User/About'))
const StoreLazy = lazy(() => import('@/page/User/Store'))
// End - [Define Pages]

const userRoute: IRoute = {
  id: 'user route',
  path: '/',
  title: 'Home',
  element: suspenser(<UserLayoutRazy />, <Loading />),
  children: [
    {
      id: 0,
      title: 'Home',
      path: '/',
      element: suspenser(<HomeRazy />, <Loading />),
      auth: false,
      disabled: false,
    },
    {
      id: 1,
      title: 'About',
      path: '/about',
      element: suspenser(<AboutRazy />, <Loading />),
      auth: false,
      disabled: false,
    },
    {
      id: 2,
      title: 'Store',
      path: '/store',
      element: suspenser(<StoreLazy />, <Loading />),
      auth: false,
      disabled: false,
    },
  ],
  auth: false,
  disabled: false,
}

export default userRoute
