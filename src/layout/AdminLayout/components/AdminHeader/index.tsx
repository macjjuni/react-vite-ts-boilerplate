import { memo } from 'react'
import { Link } from 'react-router-dom'
import { commonLayoutClass } from '@/layout/layout.style'
import UserAdminSwitchButton from '@/components/UserAdminSwitchButton'

// Start - [TailwindCSS]
const headerClass = `h-header border-b flex justify-between items-center ${commonLayoutClass}`
const logoClass = 'text-xl'

// End - [TailwindCSS]

// Start - [Define Const]
const logoTitle = import.meta.env.VITE_TITLE || 'Not Found Title'

// End - [Define Const]

function YetMemoizatedLogo() {
  return (
    <Link className={logoClass} to="/admin">
      {logoTitle} - Admin
    </Link>
  )
}

const Logo = memo(YetMemoizatedLogo)

function Header() {
  return (
    <header className={headerClass}>
      <Logo />
      <UserAdminSwitchButton />
    </header>
  )
}

export default memo(Header)
