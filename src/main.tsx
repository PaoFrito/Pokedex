import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.module.css'
import { ErrorPage } from './pages/NotFoundPage/index.tsx'
import { PokedexPage } from './pages/PokedexPage/index.tsx'
import { LegendariesPage } from './pages/LegendariesPage/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>
  },
  {
    path: '/pokedex',
    element: <PokedexPage />,
    errorElement: <ErrorPage/>
  },
  {
    path: '/legendaries',
    element: <LegendariesPage />,
    errorElement: <ErrorPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
