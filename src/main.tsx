import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'

const router = createBrowserRouter([
  {
    //about us page
    path: '*',
    element: <App subpage='about_us' />,
  },
  {
    //about us page
    path: '/home',
    element: <App subpage='about_us' />,
  },
  {
    //zsakos sittszallitas page
    path: '/zsakos_sittszallitas',
    element: <App subpage='zsakos_sitt' />,
  },
  {
    //lomtalanitas page
    path: '/lomtalanitas',
    element: <App subpage='lomtalanitas' />,
  },
  {
    //ugyfelek velemenyei page
    path: '/ugyfelek_velemenyei',
    element: <App subpage='ugyfelek_velemenyei' />,
  },
  {
    //galeria page
    path: '/galeria',
    element: <App subpage='galeria' />,
  },
])

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
