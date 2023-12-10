import { memo } from 'react'
import { useStore } from '@/store/store'

function CountText() {
  const count = useStore((store) => store.count)
  return (
    <div data-testid="counter-text" className="text-4xl font-bold">
      {count}
    </div>
  )
}

export default memo(CountText)
