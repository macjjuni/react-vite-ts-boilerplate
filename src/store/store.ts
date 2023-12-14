import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type IStroe from './store.type'

const psersistKey = 'persist-key'

// Start - [Zustand Store]

export const useStore = create<IStroe>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        counter: (num) => set((state) => ({ ...{ count: state.count + num } })),
        clear: () => set(() => ({ count: 0 })),
        adminSidebar: true,
        toggleAdminSidebar: () => set((state) => ({ ...{ adminSidebar: !state.adminSidebar } })),
      }),
      { name: psersistKey }, // persist key
    ),
  ),
)
// End - [Zustand Store]

// Start - [TSX, JSX환경 외에 사용하는 전역 스토어]
export const store = useStore.getState()

// End - [TSX, JSX환경 외에 사용하는 전역 스토어]
