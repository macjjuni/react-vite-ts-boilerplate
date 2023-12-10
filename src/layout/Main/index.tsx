import { ReactElement, memo } from 'react'
import { commonLayoutClass } from '@/layout/layout.style'

// Start - [TailwindCSS]
const mainClass = `flex flex-col flex-1 w-full h-full ${commonLayoutClass}`

// End - [TailwindCSS]

function Main({ children }: { children: ReactElement }) {
  return <main className={mainClass}>{children}</main>
}

export default memo(Main)
