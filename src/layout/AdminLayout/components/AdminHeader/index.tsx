import { memo } from 'react'
import { Link } from 'react-router-dom'
import { commonLayoutClass } from '@/layout/layout.style'

// Start - [TailwindCSS]
const headerClass = `h-header border-b flex justify-between items-center ${commonLayoutClass}`
const logoClass = 'text-xl'

// End - [TailwindCSS]

// Start - [Define Const]
const logoTitle = import.meta.env.VITE_TITLE || 'Not Found Title'

// End - [Define Const]

function YetMemoizatedLogo() {
  return (
    <Link className={logoClass} to="/">
      {logoTitle} - Admin
    </Link>
  )
}

const Logo = memo(YetMemoizatedLogo)

function Header() {
  return (
    <header className={headerClass}>
      <Logo />
    </header>
  )
}

export default memo(Header)
