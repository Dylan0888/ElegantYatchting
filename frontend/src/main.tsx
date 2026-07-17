import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import ToursPage from './pages/ToursPage.tsx'
import GalleryPage from './pages/GalleryPage.tsx'
import AboutPage from './pages/AboutPage.tsx'



const Router = createBrowserRouter([
  {path: "/", element: <App />},
  {path:"/home", element: <HomePage />},
  {path:"/tours", element: <ToursPage />},
  {path:"/gallery", element: <GalleryPage />},
  {path:"/about", element: <AboutPage />},
  {path:"*", element: <h1>404 Not Found</h1>} //! Change to fail page component later
]
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Router}/>
  </StrictMode>,
)
