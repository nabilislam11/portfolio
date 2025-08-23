import React from 'react'
import { FaCode } from "react-icons/fa";
const Service = () => {
  return (
    <div id='Service' className='pt-[22px] pb-[33px]  md:pt-[103px] md:pb-[126px] min-h-screen  '>
      <div className="">
        <div className="text-center pb-[40px] ">
          <p className=' font-normal font-primary text-gray-300 text-[18px]' >Popular Services</p>
          <h3 className='font-secondary  font-bold  text-[26px] md:text-[42px] text-white w-[361px] md:w-[602px] mx-auto '>My <span className='text-purple-500  '>Special Service </span>For yourBusiness Development</h3>
        </div>
        {/* top__part */}
        <div className=" flex md:flex-row justify-around pb-[15px] md:pb-24  flex-col gap-y-5 md:gap-y-0 ">
          <div data-aos="fade-down-right" data-aos-delay="200" className=" group flex items-center md:justify-between justify-center  bg-[#1F1F1F] rounded-[20px] py-[20px] md:py-[45px] px-[20px] gap-x-[20px] md:gap-x-[102px] transition-all   duration-300  border-2  hover:border-2 hover:border-purple-800 " >
            <div className="gap-y-2 ">
              <h3 className='font-secondary  font-bold text-[24px] md:text-[32px] text-white md:w-[385px]'>Responsive Web Design</h3>
              <p className='font-normal font-primary text-gray-400 text-[16px]'>Responsive web design for any device</p>
            </div>
            <div className="w-[49px] h-[49px] bg-black transition-transform duration-300 group-hover:bg-purple-800 rounded-full flex justify-center items-center text-white">
              <FaCode size={20} />
            </div>
          </div>
          <div data-aos="fade-down-left" data-aos-delay="200" className=" group transition-transform duration-300 flex items-center justify-between  bg-[#1F1F1F] rounded-[20px] py-[20px] md:py-[35px] px-[20px] gap-x-[20px] md:gap-x-[102px]  border-2  hover:border-2 hover:border-purple-800 " >
            <div className="gap-y-2">
              <h3 className='font-secondary  font-bold text-[24px] md:text-[32px] text-white w-[200px] md:w-[385px]'>React & Next.js Development</h3>
              <p className='font-normal font-primary text-gray-400 text-[16px] w-[150px] md:w-[385px] '>Build fast, scalable and SEO-friendly apps with React & Next.js</p>
            </div>
            <div className="w-[49px] h-[49px] bg-black rounded-full flex justify-center items-center text-white  group-hover:bg-purple-800 ">
              <FaCode size={20} />
            </div>
          </div>
        </div>
        {/* bottom__part */}
        <div className="flex md:flex-row justify-around md:gap-y-0 flex-col gap-y-5   ">
          <div data-aos="fade-up-right" data-aos-delay="200" className="flex items-center md:justify-between  justify-center bg-[#1F1F1F] rounded-[20px] py-[20px] md:py-[45px] px-[20px]  gap-x-[20px] md:gap-x-[102px] group transition-all   duration-300  border-2  hover:border-2 hover:border-purple-800 " >
            <div className="gap-y-2">
              <h3 className='font-secondary  font-bold text-[25px] md:text-[32px] text-white md:w-[385px]'>Tailwind CSS Styling</h3>
              <p className='font-normal font-primary text-gray-400 text-[16px]'>Pixel-perfect, modern and clean UI with Tailwind CSS</p>
            </div>
            <div className="w-[49px] h-[49px] bg-black rounded-full flex justify-center items-center text-white  group-hover:bg-purple-800">
              <FaCode size={20} />
            </div>
          </div>
          <div data-aos="fade-up-left" data-aos-delay="200" className="flex items-center md:justify-between  justify-center bg-[#1F1F1F] rounded-[20px] py-[20px] md:py-[45px] px-[20px]  gap-x-[20px] md:gap-x-[102px] group transition-all   duration-300  border-2  hover:border-2 hover:border-purple-800 " >
            <div className="gap-y-2">
              <h3 className='font-secondary  font-bold text-[24px] md:text-[32px] md:w-[385px] text-white l '>Front-End Optimization</h3>
              <p className='font-normal font-primary text-gray-400 text-[16px]'>Fast loading, SEO-friendly and optimized front-end solutions</p>
            </div>
            <div className="w-[49px] h-[49px] bg-black rounded-full flex justify-center items-center text-white  transition-all   duration-300 group-hover:bg-purple-800">
              <FaCode size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Service
