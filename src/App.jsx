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
import Blog_details from './component/blog/Blog_details'
import Footer from './component/footer/Footer'

const blog = [{
  id: 1, title: "javascript", description: " javascriprt is a major part of cording.", img: "",
}, {
  id: 2, title: "javascript", description: " javascriprt is a major part of cording.", img: "",
}, {
  id: 3, title: "javascript", description: " javascriprt is a major part of cording.", img: "",
}, {
  id: 4, title: "javascript", description: " javascriprt is a major part of cording.", img: "",
}, {
  id: 5, title: "javascript", description: " javascriprt is a major part of cording.", img: "",
}]

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    children: [
      { index: true, element: <Home blog={blog} /> },
      { path: "/about", element: <About /> },
      { path: "/service", element: <Service /> },
      { path: "/skill", element: <Skill /> },
      { path: "/project", element: <Project /> },
      { path: "/blog", element: <Blog blog={blog} /> },
      { path: "/blog_details/:id", element: <Blog_details blog={blog} /> },
      { path: "/footer", element: <Footer /> },
    ],
  },
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
