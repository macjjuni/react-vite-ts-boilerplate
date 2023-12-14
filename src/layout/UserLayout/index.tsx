import { Outlet } from 'react-router'
import UserHeader from '@/layout/UserLayout/components/UserHeader'
import UserMain from '@/layout/UserLayout/components/UserMain'
import UserFooter from '@/layout/UserLayout/components/UserFooter'

// Start - [TailwindCSS]
const userLayoutClass = `flex justify-center flex-col max-w-screen-lg min-h-layout mx-auto`

// End - [TailwindCSS]

export default function UserLayout() {
  return (
    <div className={userLayoutClass}>
      <UserHeader />
      <UserMain>
        <Outlet />
      </UserMain>
      <UserFooter />
    </div>
  )
}
