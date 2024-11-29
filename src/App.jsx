import React from 'react'
import Home from './Pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About'
import Skills from './Components/Skills'
import Education from './Components/Education'
import Experience from './Components/Experience'
import All from './Components/All'
import Project from './Components/Project'

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
    path:'/project',
    element: <Project/>
  }
]
  }
])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App