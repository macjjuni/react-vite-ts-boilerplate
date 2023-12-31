import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from '@/router'
import '@/styles/index.css'

const enableMockingg = async () => {
  if (import.meta.env.MODE === 'production') return

  const { worker } = await import('../mocks/browser')
  return worker.start()
}

enableMockingg().then(() => {
  ReactDOM.createRoot(document.getElementById('macjjuni') as HTMLElement).render(
    // <React.StrictMode>
    <RouterProvider router={router} />,
    // </React.StrictMode>
  )
})
