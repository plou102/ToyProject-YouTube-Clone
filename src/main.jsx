import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import MainPage from './pages/MainPage/MainPage'
import PlayPage from './pages/PlayPage/PlayPage'
import SearchPage from './pages/SearchPage/SearchPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/',
        element: <MainPage />
      },
      {
        path: '/:value',
        element: <SearchPage />
      },
      {
        path: '/:id',
        element: <PlayPage />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
