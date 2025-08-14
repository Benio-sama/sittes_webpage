import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'

const router = createBrowserRouter([
  {
    //about us page
    path: '/',
    element: <App subpage='about_us' />,
  },
  {
    //zsakos sittszallitas page
    path: '/zsakos_sittszallitas',
    element: <App subpage='zsakos_sitt' />,
  },
  {
    //sittes zsak page
    path: '/sittes_zsak',
    element: <App subpage='sittes_zsak' />,
  },
  {
    //szolgaltatasok page
    path: '/szolgaltatasok',
    element: <App subpage='szolgaltatasok' />,
  },
  {
    //ugyfelek velemenyei page
    path: '/ugyfelek_velemenyei',
    element: <App subpage='ugyfelek_velemenyei' />,
  },
  {
    //elerhetosegek page
    path: '/elerhetosegek',
    element: <App subpage='elerhetosegek' />,
  },
])

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
