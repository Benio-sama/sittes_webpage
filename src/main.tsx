import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'

const router = createBrowserRouter([
  {
    //home page
    path: '*',
    element: <App subpage='home' />,
  },
  {
    //home page
    path: '/home',
    element: <App subpage='home' />,
  },
  {
    //szolgaltatasok page
    path: '/szolgaltatasok',
    element: <App subpage='szolgaltatasok' />,
  },
  {
    //zsakos sittszallitas page
    path: '/zsakos_sittszallitas',
    element: <App subpage='zsakos_sitt' />,
  },
  // {
  //   //lomtalanitas page
  //   path: '/lomtalanitas',
  //   element: <App subpage='lomtalanitas' />,
  // },
  {
    //ugyfelek velemenyei page
    path: '/ugyfelek_velemenyei',
    element: <App subpage='ugyfelek_velemenyei' />,
  },
  {
    //arak page
    path: '/arak',
    element: <App subpage='arak' />,
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
