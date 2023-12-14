import { commonLayoutClass } from '@/layout/layout.style'

// Start - [TailwindCSS]
const headerClass = `h-footer border-t flex justify-end items-center ${commonLayoutClass}`
const copyrightClass = 'text-sm'

// End - [TailwindCSS]

export default function Footer() {
  return (
    <footer className={headerClass}>
      <div className={copyrightClass}>{new Date().getFullYear()} footer.</div>
    </footer>
  )
}
