import { memo } from 'react'
import { Link } from 'react-router-dom'

const logoClass = 'text-xl whitespace-nowrap'

const logoTitle = import.meta.env.VITE_TITLE || 'Not Found Title'

function Logo({ isAdmin }: { isAdmin?: boolean }) {
  return (
    <Link className={logoClass} to={isAdmin ? '/admin' : '/'}>
      {logoTitle} {isAdmin && '- Admin'}
    </Link>
  )
}

export default memo(Logo)
