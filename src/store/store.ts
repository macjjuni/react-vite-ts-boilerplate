import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type StoreTypes from './store.type'

const psersistKey = 'persist-key'

export const useBearStore = create<StoreTypes>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        increase: (num) => set((state) => ({ bears: state.bears + num })),
        clear: () => set(() => ({ bears: 0 })),
      }),
      {
        name: psersistKey, // persist key
      },
    ),
  ),
)
