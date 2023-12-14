import { memo } from 'react'
import { Link } from 'react-router-dom'
import { commonLayoutClass } from '@/layout/layout.style'
import UserNavigation from '@/components/UserNavigation'

// Start - [TailwindCSS]
const headerClass = `h-header border-b flex justify-between items-center ${commonLayoutClass}`
const logoClass = 'text-xl'

// End - [TailwindCSS]

const logoTitle = import.meta.env.VITE_TITLE || 'Not Found Title'

function YetMemoizatedLogo() {
  return (
    <Link className={logoClass} to="/">
      {logoTitle}
    </Link>
  )
}

const Logo = memo(YetMemoizatedLogo)

function Header() {
  return (
    <header className={headerClass}>
      <Logo />
      <UserNavigation />
    </header>
  )
}

export default memo(Header)
