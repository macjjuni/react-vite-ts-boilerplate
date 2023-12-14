import { Outlet } from 'react-router'
import AdminHeader from '@/layout/AdminLayout/components/AdminHeader'
import AdminFooter from '@/layout/AdminLayout/components/AdminFooter'
import AdminMain from '@/layout/AdminLayout/components/AdminMain'
import AdminSidebar from '@/layout/AdminLayout/components/AdminSidebar'

// Start - [TailwindCSS]
const layoutClass = `flex justify-center flex-col min-h-layout`

// End - [TailwindCSS]

export default function AdminLayout() {
  return (
    <div className={layoutClass}>
      <AdminHeader />
      <AdminMain left={<AdminSidebar />} right={<Outlet />} />
      <AdminFooter />
    </div>
  )
}
