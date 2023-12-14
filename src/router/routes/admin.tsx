import { lazy } from 'react'
import { Navigate } from 'react-router'
import { MdDashboard, MdSettings } from 'react-icons/md'
import type { IRoute } from '.'
import suspenser from '@/router/suspenser'
import Loading from '@/components/fallbackUI/Loading'

// Start - [Define Pages]

const AdminLayoutLazy = lazy(() => import('@/layout/AdminLayout'))
const DashbaordLazy = lazy(() => import('@/page/Admin/Dashboard'))
const SettingLazy = lazy(() => import('@/page/Admin/Setting'))
// End - [Define Pages]

const adminRoute: IRoute = {
  id: 0,
  path: 'admin',
  title: 'Admin',
  element: suspenser(<AdminLayoutLazy />, <Loading />),
  children: [
    {
      id: 'dashboard redirect',
      path: '',
      title: '대시보드',
      icon: <MdDashboard size={36} />,
      element: <Navigate to="/admin/dashboard" />,
      auth: true,
      disabled: true,
    },
    {
      id: 'dashboard',
      path: '/admin/dashboard',
      title: '대시보드',
      icon: <MdDashboard size={36} />,
      element: suspenser(<DashbaordLazy />, <Loading />),
      auth: true,
      disabled: false,
    },
    {
      id: 'setting',
      path: '/admin/setting',
      title: '설정',
      icon: <MdSettings size={36} />,
      element: suspenser(<SettingLazy />, <Loading />),
      auth: true,
      disabled: false,
    },
  ],
  auth: true,
  disabled: false,
}

export default adminRoute
