import { memo } from 'react'
import { Link } from 'react-router-dom'
import { userMenuList } from '@/router/routes'
import UserAdminSwitchButton from '@/components/UserAdminSwitchButton'

// Start - [TailWindCSS]
const navClass = 'px-md'
const navMenuClass = 'flex justify-center items-center gap-md'
const navItemClass = 'flex justify-center items-center'
const linkClass = 'text-md hover:underline py-xs px-sm'

// End - [TailWindCSS]

function Navigation() {
  return (
    <nav className={navClass}>
      <ul className={navMenuClass}>
        {userMenuList.map((menu) => (
          <li key={menu.id} className={navItemClass}>
            <Link to={menu.path} className={linkClass}>
              {menu?.title}
            </Link>
          </li>
        ))}
        <li>
          <UserAdminSwitchButton />
        </li>
      </ul>
    </nav>
  )
}

export default memo(Navigation)
