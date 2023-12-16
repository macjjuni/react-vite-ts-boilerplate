import { memo } from 'react'
import { commonLayoutClass } from '@/layout/layout.style'
import Logo from '@/components/Logo'
import UserAdminSwitchButton from '@/components/UserAdminSwitchButton'

// Start - [TailwindCSS]
const headerClass = `h-header border-b flex justify-between items-center ${commonLayoutClass}`

// End - [TailwindCSS]

function Header() {
  return (
    <header className={headerClass}>
      <Logo isAdmin />
      <UserAdminSwitchButton />
    </header>
  )
}

export default memo(Header)
