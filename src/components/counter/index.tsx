import { useCallback, useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  const onIncrease = useCallback(() => {
    setCount(new Date().getTime())
  }, [count])
  return (
    <>
      {count}
      <button type="button" onClick={onIncrease}>
        UP
      </button>
    </>
  )
}
