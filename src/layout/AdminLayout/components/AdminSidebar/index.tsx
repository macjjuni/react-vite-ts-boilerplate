import { useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs'
import { useStore } from '@/store/store'
import { adminMenuList } from '@/router/routes'
import { commonLayoutClass } from '@/layout/layout.style'

// Start - [TailwindCSS]
const defaultSidebarClass = `${commonLayoutClass} border-r transition-width ease-in-out duration-300`
const onSidebarClass = `${defaultSidebarClass} w-onSidebar`
const offSidebarClass = `${defaultSidebarClass} w-offSidebar`
const menuListClass = 'flex flex-col justify-start items-start gap-xs'
const menuItemClass = 'w-full'
const menuLinkClass = 'flex justify-start items-center gap-sm w-full p-xs lg:px-0 text-lg font-semibold overflow-hidden whitespace-nowrap	'
const activeClass = (bool: boolean) => (bool ? `${menuLinkClass} text-primary` : `${menuLinkClass} text-BLG700`)
const toggleBtnClass = 'absolute bottom-xl right-[-16px] text-secondary'

// End - [TailwindCSS]

export default function AdminSidebar() {
  const isActiveSidebar = useStore((store) => store.adminSidebar)
  const toggleSidebar = useStore((store) => store.toggleAdminSidebar)

  const onToggleSidebar = useCallback(() => {
    toggleSidebar()
  }, [isActiveSidebar])

  return (
    <aside className={isActiveSidebar ? onSidebarClass : offSidebarClass}>
      <nav>
        <ul className={menuListClass}>
          {adminMenuList.map((menu) => (
            <li key={menu.id} className={menuItemClass}>
              <NavLink className={({ isActive }) => activeClass(isActive)} to={menu.path}>
                <div>{menu.icon}</div>
                <div>{menu.title}</div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <button type="button" onClick={onToggleSidebar} className={toggleBtnClass}>
        {isActiveSidebar ? <BsArrowLeftCircleFill size={32} /> : <BsArrowRightCircleFill size={32} />}
      </button>
    </aside>
  )
}
