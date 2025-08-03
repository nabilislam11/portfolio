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

const Home = () => {
  return (
  <>
      <div id='Home' className='bg-black '>
      <div className="w-[1440px]  mx-auto px-4 ">
        <Navbar />
        <div className="flex justify-between">
          <div className="w-[50%] ">
            <div className="">
              <h2 className='font-tittle font-bold  text-[98px] text-white pt-[27px] pb-[12px]'>Nabil Islam</h2>
                 <div className="font-secondary font-medium  text-[32px] text-gray-400 ">
                  Hello I m{' '}
                  <TypeAnimation
                    sequence={[
                      'MERN Stack Developer', 1000,
                      'Full stack Developer', 1000,
                      'Problem Solver', 1000,
                    ]}
                    wrapper="span"
                    className='font-primary  font-bold  text-[32px] text-purple-500 '
                    cursor={true}
                     speed={50}
                    repeat={Infinity}
                    style={{ display: 'inline-block', fontWeight: 600  }}
                  />
                </div>
              <p className='font-primary  font-bold  text-[32px] text-gray-400 pt-[27px] pb-[54px] '>A passionate web developer based from Bangladesh.With a keen eye for detail and a passion for web design, I specialize in creating visually captivating and highly functional websites</p>
           
            </div>
            <div className="flex gap-x-3.5 group ">
              <p className='font-primary  font-semibold   text-[22px] text-white pb-[98px] '>Download My Resume</p>
              <div className="w-[49px] h-[49px] rounded-full  group-hover:bg-purple-800  bg-white/10 border border-white/10  flex items-center justify-center text-white ' ">
              <a href=""><FaCircleDown size={20} /></a>
              </div>
            </div>
            </div>

          <div className="w-[50%]     ">
            <div className="w-[350px] ms-auto h-[350px] pt-[109px] rounded-full ">
             <img src={pic} alt="" />
            </div>
          </div>
        </div>
      </div>
        <Marque/>
        <div className="w-[1440px]  mx-auto px-4">
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