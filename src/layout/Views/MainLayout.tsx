import { ReactElement } from 'react'

// Start - [TailWindCSS]

const MainLayoutClass = 'Main_Layout'
// End - [TailWindCSS]

export default function MainLayout({ children }: { children: ReactElement }) {
  return <div className={MainLayoutClass}>{children}</div>
}
