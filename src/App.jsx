import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Home from './pages/Home'
import Marque from './component/navbar/marque/Marque'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import MainRoot from './pages/MainRoot'
import About from './component/about/About'
import Service from './component/service/Service'
import Skill from './component/skill/Skill'
import Project from './component/project/Project'
import Blog from './component/blog/Blog'


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainRoot,
    children: [
      { index: true, Component: Home },
      { path: "/about", Component: About },
      { path: "/service", Component: Service },
      { path: "/skill", Component: Skill },
      { path: "/project", Component: Project },
      { path: "/blog", Component: Blog },
    ],
  },
])

function App() {

  return (
     <RouterProvider router={router} />
  )
}

export default App
