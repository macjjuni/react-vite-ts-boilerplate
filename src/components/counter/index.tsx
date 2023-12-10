import { useCallback, memo } from 'react'
import { useStore } from '@/store/store'
import CountText from './CountText'

function Counter() {
  const clearCount = useStore((store) => store.clear)
  const counter = useStore((store) => store.counter)

  const onIncrease = useCallback(() => {
    counter(1)
  }, [])

  const onDecrease = useCallback(() => {
    counter(-1)
  }, [])

  const onClaer = useCallback(() => {
    clearCount()
  }, [])

  return (
    <div className="flex flex-col justify-center items-center h-[300px] gap-md">
      <div className="mb-4xl">
        <CountText />
      </div>
      <div className="flex justify-center items-center gap-md w-1/2">
        <button type="button" onClick={onIncrease} data-testid="counter-up-button" className="flex justify-center items-center w-full py-xs px-md border rounded-xs">
          Up
        </button>
        <button type="button" onClick={onDecrease} data-testid="counter-down-button" className="flex justify-center items-center w-full py-xs px-md border rounded-xs">
          Down
        </button>
      </div>
      <div className="w-1/2">
        <button type="button" onClick={onClaer} data-testid="counter-clear-button" className="flex justify-center items-center w-full py-xs px-md border rounded-xs">
          Clear
        </button>
      </div>
    </div>
  )
}

export default memo(Counter)
