import React from 'react'
import { TiLocationArrowOutline } from "react-icons/ti";
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import { IoLogoGithub } from 'react-icons/io5';
const Project = () => {
    return (
        <div id='Project' className=' py-[98px] ' >
            <div className="text-center  pb-[63px] ">
                <p className='font-primary  font-normal  text-[16px] text-white pb-[22px] '>Latest Works</p>
                <h3 className='font-primary font-bold text-[42px]  text-white'>Explore My Popular <samp className='text-purple-500 '> Projects</samp></h3>
            </div>
            <div className=" flex flex-col  gap-y-[60px] pb-[163px] ">
                            {/* project__part */}
            <div className="flex items-center justify-around  ">
                {/* overflow__part_vidoe */}
                <div className="w-[45%] ">
                    <div data-aos="flip-left"  className="h-[500px] overflow-y-auto bg-gray-700  rounded-2xl ">
                        <div className=" rounded-full">
                            <img src={project1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-[35%] py-[82px] ">
                    <div className=" group">
                        <p className='font-secondary   font-medium   text-[18px] text-purple-500  '>Web Design</p>
                        <h2 className=' font-primary font-bold text-[42px]  text-white pt-[12px] pb-[17px] '>Petroil-- a landing page</h2>
                        <p className='font-primary  font-medium   text-[16px] text-white pb-[55px] ' > petroil is a simple landing page with React and tailwind.</p>
                          <div className="flex  items-center gap-x-[20px]">
                            <div className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center  transition-all duration-300 group-hover:border-purple-600 bg-white/10 border border-white/10 ">
                                   <a target='blank' href="https://github.com/nabilislam11"> <IoLogoGithub className='size-9  text-white' /></a>
                            </div>
                        <div className="w-[49px] h-[49px] rounded-full flex items-center justify-center group-hover:bg-purple-800 transition-all duration-300  group-hover:text-white   bg-white/10 border border-white/10 text-purple-500 ">
                            <TiLocationArrowOutline size={35} />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-around  ">

                <div className="w-[35%] py-[82px] ">
                    <div className="group">
                        <p className='font-secondary   font-medium   text-[18px] text-purple-500'>Web Design</p>
                        <h2 className=' font-primary font-bold text-[42px]  text-white pt-[12px] pb-[17px] '>ShopHub -- a landing page</h2>
                        <p className='font-primary  font-medium   text-[16px] text-white pb-[55px] ' >"ShopHub - Modern E-commerce Landing Page for Trending Products" </p>
                        <div className="flex  items-center gap-x-[20px]">
                            <div className="w-[52px] h-[52px] rounded-2xl  flex items-center justify-center transition-all duration-300  group-hover:border-purple-600 bg-white/10 border border-white/10 ">
                                   <a target='blank' href="https://github.com/nabilislam11"> <IoLogoGithub className='size-9  text-white' /></a>
                            </div>
                        <div className="w-[49px] h-[49px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-purple-800  group-hover:text-white   bg-white/10 border border-white/10 text-purple-500 ">
                            <TiLocationArrowOutline size={35} />
                        </div>
                        </div>
                    </div>
                </div>
                {/* overflow__part_vidoe */}
                <div className="w-[45%]   ">
                    <div data-aos="flip-right"  className="h-[500px] overflow-y-auto bg-gray-700  rounded-2xl ">
                        <img src={project2} alt="" />
                    </div>
                </div>
            </div>
             <div className="flex items-center justify-around  ">
                {/* overflow__part_vidoe */}
                <div className="w-[45%]   ">
                    <div data-aos="flip-left" className="h-[500px] overflow-y-auto bg-gray-700  rounded-2xl ">
                        <img src={project3} alt="" />
                    </div>
                </div>
                <div className="w-[35%] py-[82px] ">
                    <div className="group">
                        <p className='font-secondary   font-medium   text-[18px] text-purple-500'>Web Design</p>
                        <h2 className=' font-primary font-bold text-[42px]  text-white pt-[12px] pb-[17px] '>TCR World a landing page</h2>
                        <p className='font-primary  font-medium   text-[16px] text-white pb-[55px] ' >“TCR World” is a high-performance racing event landing page built with React and Tailwind CSS. It features a dynamic countdown, bold visual aesthetics, and a responsive UI designed to attract users to explore upcoming race events. Deployed seamlessly on Vercel for production-level performance.

                        </p>
                          <div className="flex  items-center gap-x-[20px]">
                            <div className="w-[52px] h-[52px] rounded-2xl  flex items-center justify-center transition-all duration-300  group-hover:border-purple-600 bg-white/10 border border-white/10 ">
                                   <a target='blank' href="https://github.com/nabilislam11"> <IoLogoGithub className='size-9  text-white' /></a>
                            </div>
                        <div className="w-[49px] h-[49px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-purple-800  group-hover:text-white   bg-white/10 border border-white/10 text-purple-500 ">
                            <TiLocationArrowOutline size={35} />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
                
            </div>
            <div className="text-center flex justify-center items-center gap-x-[14px] group ">
                <h5 className='font-primary font-bold text-[42px]  text-white'>View More</h5>
                <div className="w-[49px] h-[49px] rounded-full  flex items-center justify-center transition-all duration-300 group-hover:bg-purple-800  group-hover:text-white   bg-white/10 border border-white/10 text-purple-500  " >
                            <TiLocationArrowOutline size={35} />
                        </div>
            </div>


        </div>
    )
}

export default Project