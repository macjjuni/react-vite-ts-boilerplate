import { type ReactNode, Suspense } from 'react';

export default function suspenser(
  component: ReactNode,
  fallbackUI: ReactNode
): ReactNode {
  return <Suspense fallback={fallbackUI}>{component}</Suspense>;
}
