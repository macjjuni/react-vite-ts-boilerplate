import { ReactElement } from 'react'
import Header from '@/layout/Header'
import Main from '@/layout/Main'
import Footer from '@/layout/Footer'

// Start - [TailwindCSS]
const layoutClass = `flex justify-center flex-col max-w-screen-lg min-h-layout mx-auto`

// End - [TailwindCSS]

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className={layoutClass}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}
