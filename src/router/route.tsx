import { lazy, type ReactElement } from 'react'
import suspenser from '@/router/suspenser'
import Loading from '@/components/fallbackUI/Loading'

// Start - [Route Type]

export interface IRoute {
  id: number
  path: string
  title: string
  component: ReactElement
  icon?: ReactElement
  auth: boolean
  disabled: boolean
  //   permissions: 'admin' | 'user'
}
// End - [Route Type]

// Start - [Router Pages]

const HomeRazy = lazy(() => import('@/pages/Home'))
const AboutRazy = lazy(() => import('@/pages/About'))
const ZustandLazy = lazy(() => import('@/pages/Zustand'))
// End - [Router Pages]

// Start - [Define Route Array]

const routes: IRoute[] = [
  {
    id: 0,
    path: '',
    title: 'Home',
    component: suspenser(<HomeRazy />, <Loading />),
    auth: false,
    disabled: false,
  },
  {
    id: 1,
    path: 'about',
    title: 'About',
    component: suspenser(<AboutRazy />, <Loading />),
    auth: false,
    disabled: false,
  },
  {
    id: 2,
    path: 'zustand',
    title: 'Zustand',
    component: suspenser(<ZustandLazy />, <Loading />),
    auth: false,
    disabled: false,
  },
]
// End - [Define Route Array]

// Start - [Navigation Menu Type]

type MenuListTypes = Omit<IRoute, 'component'>
// End - [Navigation Menu Type]

// Start - [Navigation MenuList]

export const menuList: MenuListTypes[] = routes.reduce((acc: MenuListTypes[], cur) => {
  const { id, path, title, auth, disabled } = cur
  if (!disabled) {
    acc.push({ id, path, title, auth, disabled })
  }
  return acc
}, [])
// End - [Navigation Navigation MenuList]

export default routes
