import { ReactElement } from 'react'
import { commonLayoutClass } from '@/layout/layout.style'

// Start - [TailwindCSS]
const wrapperClass = `flex flex-row flex-1`
const mainClass = `flex flex-1 w-full h-full transition-width ease-in-out duration-300 ${commonLayoutClass}`

// End - [TailwindCSS]

export default function Main({ left, right }: { left: ReactElement; right: ReactElement }) {
  return (
    <div className={wrapperClass}>
      {left}
      <main className={mainClass}>{right}</main>
    </div>
  )
}
