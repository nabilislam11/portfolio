import React from 'react'
import Navbar from '../component/navbar/Navbar'
import { Outlet } from 'react-router'
import Container from '../component/container/Container'

const MainRoot = () => {
  return (
    <div className='bg-black '>
        <Navbar/>


        <Container>
        <Outlet/>
        </Container>
    </div>
  )
}

export default MainRoot