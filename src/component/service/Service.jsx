import React from 'react'
import { FaCode } from "react-icons/fa";
const Service = () => {
  return (
    <div id='Service' className='pt-[103px] pb-[126px] '>
      <div className="text-center pb-[40px] ">
        <p className=' font-normal font-primary text-gray-300 text-[18px]' >Popular Services</p>
        <h3 className='font-secondary  font-bold text-[42px] text-white w-[602px] mx-auto '>My <span className='text-purple-500  '>Special Service </span>For yourBusiness Development</h3>
      </div> 
      {/* top__part */}
      <div className= " flex justify-around pb-24 ">
           <div className=" group transition-transform duration-300 flex items-center justify-between bg-[#1F1F1F] rounded-[20px] py-[45px] px-[20px] gap-x-[102px] border-2 hover:border-2 hover:border-purple-800 " >
        <div className="gap-y-2">
          <h3 className='font-secondary  font-bold text-[32px] text-white w-[385px]'>Responsive Web Design</h3>
          <p className='font-normal font-primary text-gray-400 text-[16px]'>Responsive web design for any device</p>
        </div>
        <div className="w-[49px] h-[49px] bg-black transition-transform duration-300 group-hover:bg-purple-800 rounded-full flex justify-center items-center text-white">
          <FaCode size={20} />
        </div>
      </div>
           <div className=" group transition-transform duration-300 flex items-center justify-between bg-[#1F1F1F] rounded-[20px] py-[35px] px-[20px] gap-x-[102px]  border-2  hover:border-2 hover:border-purple-800 " >
        <div className="gap-y-2">
          <h3 className='font-secondary  font-bold text-[32px] text-white w-[385px]'>React Development</h3>
          <p className='font-normal font-primary text-gray-400 text-[16px]'>Be a part of front end revolutionary tech like React js</p>
        </div>
        <div className="w-[49px] h-[49px] bg-black rounded-full flex justify-center items-center text-white  group-hover:bg-purple-800 ">
          <FaCode size={20} />
        </div>
      </div>
      </div>
      {/* bottom__part */}
      <div className="flex justify-around ">
           <div className="flex items-center justify-between bg-[#1F1F1F] rounded-[20px] py-[35px] px-[20px] gap-x-[102px] group transition-transform duration-300  border-2  hover:border-2 hover:border-purple-800 " >
        <div className="gap-y-2">
          <h3 className='font-secondary  font-bold text-[32px] text-white w-[385px]'>Powerful Backend Dev</h3>
          <p className='font-normal font-primary text-gray-400 text-[16px]'>unleash the power of express and node js with me</p>
        </div>
        <div className="w-[49px] h-[49px] bg-black rounded-full flex justify-center items-center text-white  group-hover:bg-purple-800">
          <FaCode size={20} />
        </div>
      </div>
           <div className="flex items-center justify-between bg-[#1F1F1F] rounded-[20px] py-[35px] px-[20px] gap-x-[102px] group  transition-all   duration-300  border-2  hover:border-2 hover:border-purple-800 " >
        <div className="gap-y-2">
          <h3 className='font-secondary  font-bold text-[32px] w-[385px] text-white l '>Modern and smart DataBase</h3>
          <p className='font-normal font-primary text-gray-400 text-[16px]'>Let’s keep your valuable data in Mongo-DB with me</p>
        </div>
        <div className="w-[49px] h-[49px] bg-black rounded-full flex justify-center items-center text-white  transition-all   duration-300 group-hover:bg-purple-800">
          <FaCode size={20} />
        </div>
      </div>
      </div>
    </div>
  )
}
export default Service
