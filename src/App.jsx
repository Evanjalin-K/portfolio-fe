import React from 'react'
import Home from './Pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About'
import Skills from './Components/Skills'
import Education from './Components/Education'
import Experience from './Components/Experience'
import All from './Components/All'

const router = createBrowserRouter([
  {
  path:'/',
  element: <Home />,
  children: [
    {
    path:'/',
    element:<All />
    },
    {
    path:'/about',
    element: <About />
  },
  {
    path:'/skills',
    element:<Skills />
  },
  {
    path:'/education',
    element:<Education />
  },
  {
    path:'/experience',
    element: <Experience />
  }
]
  }
])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App