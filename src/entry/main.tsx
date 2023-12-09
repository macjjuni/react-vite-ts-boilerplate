import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from '@/router'
import '@/styles/index.css'

ReactDOM.createRoot(document.getElementById('macjjuni') as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />,
  // </React.StrictMode>
)
