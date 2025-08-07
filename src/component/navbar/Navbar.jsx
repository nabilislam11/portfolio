import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import { TbVectorBezierCircle } from "react-icons/tb";
import ScrollSpy from 'react-scrollspy-navigation';
import { TiThMenuOutline } from 'react-icons/ti';

const Navbar = () => {
    const [show,setshow] =useState(false);
    return (
        <>
         <div className=' md:flex flex-row md:justify-between md:items-center flex  justify-between items-center px-8 mx-auto fixed left-0 top-0 w-full z-9999  bg-black '>
                <div className="md:w-[25%] "> <h1 className='font-tittle  font-bold text-[35px] text-gray-600  '>
                    <img className=' w-[90px] h-[90px]   ' src={logo} alt="#logg" /></h1>
                    </div>
                <div className=" w-[40%] justify-center  hidden md:block  ">
                <ScrollSpy behavior='smooth' activeClass=" bg-gray-600 px-6 py-2 rounded-full  border-2   " >
                        <ul className='md:flex md:flex-row md:justify-around  items-center  space-x-4 backdrop-blur-md bg-white/10 border-2 border-white/10 px-6 py-4 rounded-full text-sm text-white shadow-lg   '> 
                        <li className='font-secondary   font-normal  text-[17px]'><a href="#Home">Home</a></li>
                        <li className='font-secondary   font-normal  text-[17px]'><a href="#About">About</a></li>
                        <li className='font-secondary   font-normal  text-[17px]'><a href="#Service">Service</a></li>
                        <li className='font-secondary   font-normal  text-[17px]'><a href="#Skill">Skill</a></li>
                        <li className='font-secondary   font-normal  text-[17px]'><a href="#Project">Project</a></li>
                        <li className='font-secondary   font-normal  text-[17px]'><a href="#Blog">Blog</a></li>
                    </ul>
                </ScrollSpy>
                </div>
                <div className="  hidden  w-[25%]  md:flex flex-row justify-end  items-center gap-x-1.5  ">
                    <p className='font-secondary   font-medium  text-white  text-[20px]'>Let’s Talk</p>
                    <a className='text-white flex justify-center w-[35px] h-[35px] rounded-full  bg-purple-800  items-center '  href=""><TbVectorBezierCircle size={20} /></a>
                </div>
                <div className=" block lg:hidden ">
                    {show?    
                    <TiThMenuOutline size={25} onClick={()=>setshow(!show) } className='text-white ' />
                    :
                    <TiThMenuOutline size={25} onClick={()=>setshow(!show) } className='text-purple-500  ' />
                    }
                </div>
              
            </div>
                {
                    show&&(
                          <div className=" w-[360px] h-[350px]   flex flex-col justify-center items-center  bg-white/10 rounded-[12px]       md:w-[50%]    ">
                <ScrollSpy behavior='smooth' activeClass=" bg-gray-600 px-6 py-2 rounded-full  border-2   " >
                        <ul className=' text-white flex flex-col items-center justify-center  space-y-4  '> 
                        <li className='font-secondary font-normal text-[17px] bg-white/10 border-2 border-white/10 text-sm  shadow-lg rounded-3xl py-[6px] px-[12px]'><a href="#Home">Home</a></li>
                        <li className='font-secondary font-normal text-[17px] bg-white/10 border-2 border-white/10 text-sm  shadow-lg rounded-3xl py-[6px] px-[12px]'><a href="#About">About</a></li>
                        <li className='font-secondary font-normal text-[17px] bg-white/10 border-2 border-white/10 text-sm  shadow-lg rounded-3xl py-[6px] px-[12px]'><a href="#Service">Service</a></li>
                        <li className='font-secondary font-normal text-[17px] bg-white/10 border-2 border-white/10 text-sm  shadow-lg rounded-3xl py-[6px] px-[12px]'><a href="#Skill">Skill</a></li>
                        <li className='font-secondary font-normal text-[17px] bg-white/10 border-2 border-white/10 text-sm  shadow-lg rounded-3xl py-[6px] px-[12px]'><a href="#Project">Project</a></li>
                        <li className='font-secondary font-normal text-[17px] bg-white/10 border-2 border-white/10 text-sm  shadow-lg rounded-3xl py-[6px] px-[12px]'><a href="#Blog">Blog</a></li>
                    </ul>
                </ScrollSpy>
                </div> 
                    )
                }

        </>
           
    )
}

export default Navbar