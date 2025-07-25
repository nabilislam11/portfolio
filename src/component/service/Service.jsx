import React from 'react'
import { FaCode } from "react-icons/fa";
const Service = () => {
  return (
    <div className='pt-[103px] pb-[126px] '>
      <div className="text-center pb-[40px] ">
        <p className=' font-normal font-primary text-gray-400 text-[18px]' >Popular Services</p>
        <h3 className='font-secondary  font-bold text-[42px] text-white w-[602px] mx-auto '>My <span className='text-[#98c45d] '>Special Service </span>For yourBusiness Development</h3>
      </div>
      <div className="flex justify-around pb-24 ">
           <div className="flex items-center justify-between bg-[#1F1F1F] rounded-[20px] py-[35px] px-[20px] gap-x-[102px] " >
        <div className="gap-y-2">
          <h3 className='font-secondary  font-bold text-[32px] text-white'>Responsive Web Design</h3>
          <p className='font-normal font-primary text-gray-400 text-[16px]'>Responsive web design for any device</p>
        </div>
        <div className="w-[49px] h-[49px] bg-black rounded-full flex justify-center items-center text-white">
          <FaCode size={20} />
        </div>
      </div>
           <div className="flex items-center justify-between bg-[#1F1F1F] rounded-[20px] py-[35px] px-[20px] gap-x-[102px] " >
        <div className="gap-y-2">
          <h3 className='font-secondary  font-bold text-[32px] text-white'>Responsive Web Design</h3>
          <p className='font-normal font-primary text-gray-400 text-[16px]'>Responsive web design for any device</p>
        </div>
        <div className="w-[49px] h-[49px] bg-black rounded-full flex justify-center items-center text-white">
          <FaCode size={20} />
        </div>
      </div>
      </div>
      <div className="flex justify-around ">
           <div className="flex items-center justify-between bg-[#1F1F1F] rounded-[20px] py-[35px] px-[20px] gap-x-[102px] " >
        <div className="gap-y-2">
          <h3 className='font-secondary  font-bold text-[32px] text-white'>Responsive Web Design</h3>
          <p className='font-normal font-primary text-gray-400 text-[16px]'>Responsive web design for any device</p>
        </div>
        <div className="w-[49px] h-[49px] bg-black rounded-full flex justify-center items-center text-white">
          <FaCode size={20} />
        </div>
      </div>
           <div className="flex items-center justify-between bg-[#1F1F1F] rounded-[20px] py-[35px] px-[20px] gap-x-[102px] " >
        <div className="gap-y-2">
          <h3 className='font-secondary  font-bold text-[32px] text-white'>Responsive Web Design</h3>
          <p className='font-normal font-primary text-gray-400 text-[16px]'>Responsive web design for any device</p>
        </div>
        <div className="w-[49px] h-[49px] bg-black rounded-full flex justify-center items-center text-white">
          <FaCode size={20} />
        </div>
      </div>
      </div>
    </div>
  )
}
export default Service
