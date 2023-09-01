import { Suspense } from 'react'
import { Outlet } from 'react-router'
import Spinner from '@/components/Spinner'
import Layout from '@/layout'

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </Layout>
  )
}

export default App
