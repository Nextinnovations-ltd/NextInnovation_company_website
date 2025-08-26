import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router/index'
import { RouterProvider } from 'react-router-dom'
import './i18n'

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
