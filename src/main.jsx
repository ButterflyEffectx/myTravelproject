import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages
import Booking from './pages/booking.jsx'
import Gallery from './pages/gallery.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([

  {
    path: '/',
    element:<App/>
  },
  
  {
    path: '/Booking',
    element:<Booking/>
  },
  
  {
    path: '/Gallery',
    element:<Gallery/>
  },

  {
    path: '/About',
    element:<About/>
  },
  

  {
    path: '/Contact',
    element:<Contact/>
  },
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
