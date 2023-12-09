import { Link } from 'react-router-dom'
import { commonLayoutClass } from '@/layout/layout.style'
import Navigation from '@/components/navigation'

// Start - [TailwindCSS]
const headerClass = `h-header border-b flex justify-between items-center ${commonLayoutClass}`
const logoClass = 'text-2xl'
// End - [TailwindCSS]

const logoTitle = import.meta.env.VITE_TITLE || 'Not Found Title'

export default function Header() {
  return (
    <header className={headerClass}>
      <Link className={logoClass} to="/">
        {logoTitle}
      </Link>
      <Navigation />
    </header>
  )
}
