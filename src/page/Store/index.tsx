import Counter from '@/components/Counter'
import MainLayout from '@/layout/page/MainLayout'

export default function Zustand() {
  return (
    <MainLayout>
      <>
        <h1 className="text-xl">Store</h1>
        <Counter />
      </>
    </MainLayout>
  )
}
