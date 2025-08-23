import React from 'react'
import Navbar from '../component/navbar/Navbar'
import pic from "../assets/pic.jpg"

import { FaCircleDown } from "react-icons/fa6";
import Marque from '../component/navbar/marque/Marque';
import About from '../component/about/About';
import Service from '../component/service/Service';
import Skill from '../component/skill/Skill';
import Project from '../component/project/Project';
import Blog from '../component/blog/Blog';
import Footer from '../component/footer/Footer';
import { TypeAnimation } from 'react-type-animation';
import profile from '../assets/profile.jpg'
import Contact from '../component/contact/Contact';

const Home = () => {
  return (
  <>
      <div id='Home' className='bg-black  '>
      <div className="w-full pt-18  mx-auto md:w-[1440px] pt:0 md:mx-auto  px-4 ">
        {/* <Navbar /> */}
        <div className=" flex md:flex-row md:justify-around md:items-center  md:pt-[109px] md:pb-[100px]  flex-col pb-[30px] ">
          <div className="w-[50%] ">
            <div className="">
              <h2 className='font-tittle font-bold text-[57px] md:text-[98px] text-white pb-[10px] md:pb-[12px]'>Nabil Islam</h2>
                 <div className="font-secondary font-medium text-[18px]  md:text-[32px] text-white ">
                  Hello I m{' '}
                  <TypeAnimation
                    sequence={[
                      'Front-end Developer With JavaScript', 1000,
                      'Front-end Developer With Tailwind CSS', 1000,
                      'Front-end Developer With REACT ', 1000,
                      'Front-end Developer With NEXT JS ', 1000,
                    ]}
                    wrapper="span"
                    className='font-primary  font-bold text-[22px]  md:text-[32px] text-purple-500 '
                    cursor={true}
                     speed={200}
                    repeat={Infinity}
                    style={{ display: 'inline-block', fontWeight: 600  }}
                  />
                </div>
              <p className='font-primary  font-bold md:w-[450px] md:text-[32px] text-gray-400 md:pt-[27px] md:pb-[54px] text-[18px] pt-[9px] pb-[19px] w-[355px] '>A passionate web developer based from Bangladesh.With a keen eye for detail and a passion for web design, I specialize in creating visually captivating and highly functional websites</p>
           
            </div>
            <div className="flex gap-x-3.5 group pb-[98px] items-center ">
              <p className='font-primary  font-semibold   text-[22px] text-white  '>Download My Resume</p>
              <div className="w-[49px] h-[49px] rounded-full  group-hover:bg-purple-800  bg-white/10 border border-white/10  flex items-center justify-center text-white ' ">
              <a href=""><FaCircleDown size={20} /></a>
              </div>
            </div>
            </div>

          <div className="md:w-[50%]  w-full    ">
             <img className=' w-full h-[90%] object-cover rounded-[250px] ' src={profile} alt="" />
          </div>
        </div>
      </div>
        {/* <Marque/> */}
        <div className="w-full  mx-auto md:w-[1440px] md:mx-auto  px-4">
          <About/>
          <Service/>
          <Skill/>
          <Project/>
          <Blog/>
          <Footer/>
        </div>
    </div>
  </>


  )
}

export default Home