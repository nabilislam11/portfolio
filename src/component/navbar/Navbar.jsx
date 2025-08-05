import React from 'react'
import logo from "../../assets/logo.png"
import { TbVectorBezierCircle } from "react-icons/tb";
import ScrollSpy from 'react-scrollspy-navigation';

const Navbar = () => {
    return (
            <div className=' flex justify-between  items-center px-8 mx-auto fixed left-0 top-0 w-full z-9999  bg-black  '>
                <div className="w-[25%] "> <h1 className='font-tittle  font-bold text-[35px] text-gray-600  '>
                    <img className=' w-[90px] h-[90px]   ' src={logo} alt="#logg" /></h1>
                    </div>
                <div className=" w-[40%] justify-center   ">
                <ScrollSpy behavior='smooth' activeClass=" bg-gray-600 px-6 py-2 rounded-full  border-2   " >
                        <ul className='flex justify-around  items-center  space-x-4 backdrop-blur-md bg-white/10 border-2 border-white/10 px-6 py-4 rounded-full text-sm text-white shadow-lg '> 
                        <li className='font-secondary   font-normal  text-[17px]'><a href="#Home">Home</a></li>
                        <li className='font-secondary   font-normal  text-[17px]'><a href="#About">About</a></li>
                        <li className='font-secondary   font-normal  text-[17px]'><a href="#Service">Service</a></li>
                        <li className='font-secondary   font-normal  text-[17px]'><a href="#Skill">Skill</a></li>
                        <li className='font-secondary   font-normal  text-[17px]'><a href="#Project">Project</a></li>
                        <li className='font-secondary   font-normal  text-[17px]'><a href="#Blog">Blog</a></li>
                    </ul>
                </ScrollSpy>
                </div>
                <div className="w-[25%] flex justify-end  items-center gap-x-1.5  ">
                    <p className='font-secondary   font-medium  text-white  text-[20px]'>Let’s Talk</p>
                    <a className='text-white flex justify-center w-[35px] h-[35px] rounded-full  bg-purple-800  items-center '  href=""><TbVectorBezierCircle size={20} /></a>
                </div>
            </div>
    )
}

export default Navbar