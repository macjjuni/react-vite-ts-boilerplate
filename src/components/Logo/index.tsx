import { memo } from 'react'
import { Link } from 'react-router-dom'

// Start - [TailwindCSS]
const logoClass = 'text-xl whitespace-nowrap'

// End - [TailwindCSS]

// Start - [Define Const]
const logoTitle = import.meta.env.VITE_TITLE || 'Not Found Title'

// End - [Define Const]

function Logo({ isAdmin }: { isAdmin?: boolean }) {
  return (
    <Link className={logoClass} to="/admin">
      {logoTitle} {isAdmin && '- Admin'}
    </Link>
  )
}

export default memo(Logo)
