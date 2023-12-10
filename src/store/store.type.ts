// Start - [Counter Function Type]
type CounterType = (nm: number) => void

// End - [Increase Function Type]

// Start - [Clear Function Type]
type ClearType = () => void

// End - [Claer Function Type]

interface IStore {
  count: number
  counter: CounterType
  clear: ClearType
}

export default IStore
