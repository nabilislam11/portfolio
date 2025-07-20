import React from 'react'
import Navbar from '../component/navbar/Navbar'
import pic from "../assets/pic.jpg"
import { FaCircleDown } from "react-icons/fa6";
import Marque from '../component/navbar/marque/Marque';

const Home = () => {
  return (
  <>
      <div className='bg-black '>
      <div className="w-[1440px]  mx-auto px-4 ">
        <Navbar />
        <div className="flex justify-between">
          <div className="w-[50%] ">
            <div className="">
              <h1 className=' font-secondary font-medium  text-[32px] text-gray-400  pt-[112px] '>Hello I m</h1>
              <h2 className='font-tittle font-bold  text-[98px] text-purple-800 pt-[27px] pb-[12px]'>Nabil Islam</h2>
              <h3 className='font-primary  font-bold  text-[32px] text-white'>I m a <span className='font-primary  font-bold  text-[32px] text-[#98c45d]'>MERN Stack Developer</span></h3>
              <p className='font-primary  font-bold  text-[32px] text-gray-400 pt-[27px] pb-[54px] '>A passionate web developer based from Bangladesh.With a keen eye for detail and a passion for web design, I specialize in creating visually captivating and highly functional websites</p>
            </div>
            <div className="flex gap-x-3.5">
              <p className='font-primary  font-bold  text-[32px] text-white pb-[98px] '>Download My Resume</p>
              <div className="w-[49px] h-[49px] rounded-full bg-[#98c45d] flex items-center justify-center text-white ' ">
              <a href=""><FaCircleDown size={20} /></a>

              </div>
            </div>
            </div>

          <div className="w-[50%]   ">
            <div className="w-[350px] ms-auto h-[350px] pt-[109px] ">
             <img src={pic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
        <Marque/>
  </>


  )
}

export default Home