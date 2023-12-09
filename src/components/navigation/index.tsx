import React from 'react'
import { Link } from 'react-router-dom'
import { menuList } from '@/router/route'

// Start - [TailWindCSS]
const navClass = 'flex justify-center items-center gap-lg'
const navItemClass = 'flex justify-center items-center'
const linkClass = 'text-md hover:underline'

// End - [TailWindCSS]

function Navigation() {
  return (
    <nav>
      <ul className={navClass}>
        {menuList.map((menu) => (
          <li key={menu.path} className={navItemClass}>
            <Link to={menu.path} className={linkClass}>
              {menu?.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default React.memo(Navigation)
