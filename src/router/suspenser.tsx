import { Suspense, type ReactElement } from 'react'

export default function suspenser(component: ReactElement, fallbackUI: ReactElement): ReactElement {
  return <Suspense fallback={fallbackUI}>{component}</Suspense>
}
