import { type ReactElement } from 'react'
import userRoute from './user'
import adminRoute from './admin'

// Start - [Route Type]
export interface IRoute {
  id: number | string
  path: string
  title: string
  element: ReactElement
  icon?: ReactElement
  auth: boolean
  disabled: boolean
  children?: IRoute[]
  //   permissions: 'admin' | 'user'
}

// End - [Route Type]

// Start - [Define Routes]
const totalRoutes: IRoute[] = [userRoute, adminRoute]

// End - [Define Routes]

// Start - [Navigation Menu Type]
type MenuListType = Omit<IRoute, 'element'>

// End - [Navigation Menu Type]

// Start - [Navigation MenuList]
export const userMenuList: MenuListType[] =
  userRoute.children?.reduce((acc: MenuListType[], cur) => {
    const { id, path, title, icon, auth, disabled, children } = cur
    if (!disabled) {
      acc.push({ id, path, title, icon, auth, disabled, children })
    }
    return acc
  }, []) || []

export const adminMenuList: MenuListType[] =
  adminRoute.children?.reduce((acc: MenuListType[], cur) => {
    const { id, path, title, icon, auth, disabled, children } = cur
    if (!disabled) {
      acc.push({ id, path, title, icon, auth, disabled, children })
    }
    return acc
  }, []) || []

// End - [Navigation Navigation MenuList]

export default totalRoutes
