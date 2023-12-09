import { lazy, type ReactElement } from 'react'
import suspenser from '@/router/suspenser'
import Loading from '@/components/fallbackUI/Loading'

export interface IRoute {
  path: string
  title: string
  component: ReactElement
  icon?: ReactElement
  auth: boolean
  disabled: boolean
  //   permissions: 'admin' | 'user'
}

const HomeRazy = lazy(() => import('@/pages/Home'))
const AboutRazy = lazy(() => import('@/pages/About'))

const routes: IRoute[] = [
  {
    path: '',
    title: 'Home',
    component: suspenser(<HomeRazy />, <Loading />),
    auth: false,
    disabled: false,
  },
  {
    path: 'about',
    title: 'About',
    component: suspenser(<AboutRazy />, <Loading />),
    auth: false,
    disabled: false,
  },
]

type MenuTypes = Omit<IRoute, 'component'>

// 네비게이션 메뉴 리스트
export const menuList: MenuTypes[] = routes.reduce((acc: MenuTypes[], cur) => {
  const { path, title, auth, disabled } = cur
  if (!disabled) {
    acc.push({ path, title, auth, disabled })
  }
  return acc
}, [])

export default routes
