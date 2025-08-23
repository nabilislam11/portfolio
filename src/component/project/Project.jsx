import React from 'react'
import { TiLocationArrowOutline } from "react-icons/ti";
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import { IoLogoGithub } from 'react-icons/io5';
const Project = () => {
    return (
        <div id='Project' className=' py-[10px] md:py-[98px] min-h-screen  ' >
            <div className="text-center  pb-[24px] md:pb-[63px] ">
                <p className='font-primary  font-normal text-[16px] text-white md:pb-[22px] '>Latest Works</p>
                <h3 className='font-primary font-bold text-[28px] md:text-[42px]  text-white'>Explore My Popular <samp className='text-purple-500 '> Projects</samp></h3>
            </div>
            <div className="flex flex-col  gap-y-[20px] md:gap-y-[60px] md:pb-[163px]">
                {/* project__part */}
                <div className="md:flex items-center justify-around ">
                    {/* overflow__part_vidoe */}
                    <div className="md:w-[45%] ">
                        <div data-aos="flip-left" className=" h-[400px] md:h-[500px] overflow-y-auto bg-gray-700  rounded-2xl ">
                            <div className=" rounded-full">
                                <img src={project1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[35%] py-[30px] md:py-[82px] ">
                        <div className=" group">
                            <p className='font-secondary   font-medium  text-[16px] md:text-[18px] text-purple-500  '>Web Design</p>
                            <h2 className=' font-primary font-bold text-[30px] md:text-[42px]  text-white  pt-[8px] md:pt-[12px]  pb-[8px] md:pb-[17px] '>Petroil-- a landing page</h2>
                            <p className='font-primary  font-medium   text-[16px] text-white pb-[10px] md:pb-[55px] ' > petroil is a simple landing page with React and tailwind.</p>
                            <div className="flex  items-center gap-x-[20px]">
                                <div className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center  transition-all duration-300 group-hover:border-purple-600 bg-white/10 border border-white/10 ">
                                    <a target='blank' href="https://github.com/nabilislam11"> <IoLogoGithub className='size-9  text-white' /></a>
                                </div>
                            <div className="w-[39px] h-[39px] md:w-[49px] md:h-[49px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-purple-800 group-hover:text-white bg-white/10 border border-white/10 text-purple-500  " >
                                    <a target='blank' href="petrol-react-project.vercel.app"><TiLocationArrowOutline size={35} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:flex items-center justify-around ">

                    <div className="md:w-[35%] py-[30px] md:py-[82px] ">
                        <div className="group">
                            <p className='font-secondary   font-medium   text-[16px] md:text-[18px text-purple-500'>Web Design</p>
                            <h2 className=' font-primary font-bold text-[30px] md:text-[42px]  text-white  pt-[8px] md:pt-[12px]  pb-[8px] md:pb-[17px] '>ShopHub -- a landing page</h2>
                            <p className='font-primary  font-medium   text-[16px] text-white pb-[10px] md:pb-[55px]' >"ShopHub - Modern E-commerce Landing Page for Trending Products" </p>
                            <div className="flex  items-center gap-x-[20px]">
                                <div className="w-[52px] h-[52px] rounded-2xl  flex items-center justify-center transition-all duration-300  group-hover:border-purple-600 bg-white/10 border border-white/10 ">
                                    <a target='blank' href="https://github.com/nabilislam11"> <IoLogoGithub className='size-9  text-white' /></a>
                                </div>
                                <div className="w-[39px] h-[39px] md:w-[49px] md:h-[49px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-purple-800 group-hover:text-white bg-white/10 border border-white/10 text-purple-500  " >
                                   <a target='blank' href="sports-car-design.vercel.app"><TiLocationArrowOutline size={35} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* overflow__part_vidoe */}
                    <div className="md:w-[45%]">
                        <div data-aos="flip-right" className=" h-[400px] md:h-[500px] overflow-y-auto bg-gray-700  rounded-2xl ">
                            <img src={project2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="md:flex items-center justify-around">
                    {/* overflow__part_vidoe */}
                    <div className="md:w-[45%]   ">
                        <div data-aos="flip-left" className=" h-[400px] md:h-[500px] overflow-y-auto bg-gray-700  rounded-2xl ">
                            <img src={project3} alt="" />
                        </div>
                    </div>
                    <div className="md:w-[35%] py-[30px] md:py-[82px] ">
                        <div className="group">
                            <p className='font-secondary font-medium  text-[16px] md:text-[18px] text-purple-500'>Web Design</p>
                            <h2 className='font-primary font-bold text-[30px] md:text-[42px]  text-white pt-[8px] md:pt-[12px]  pb-[8px] md:pb-[17px]'>TCR World a landing page</h2>
                            <p className='font-primary  font-medium   text-[16px] text-white pb-[10px] md:pb-[55px]'>“TCR World” is a high-performance racing event landing page built with React and Tailwind CSS. It features a dynamic countdown, bold visual aesthetics, and a responsive UI designed to attract users to explore upcoming race events. Deployed seamlessly on Vercel for production-level performance.

                            </p>
                            <div className="flex items-center  gap-x-[20px]">
                                <div className="w-[52px] h-[52px] rounded-2xl  flex items-center justify-center transition-all duration-300  group-hover:border-purple-600 bg-white/10 border border-white/10 ">
                                    <a target='blank' href="https://github.com/nabilislam11"> <IoLogoGithub className='size-9 text-white' /></a>
                                </div>
                                <div className="w-[39px] h-[39px] md:w-[49px] md:h-[49px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-purple-800 group-hover:text-white bg-white/10 border border-white/10 text-purple-500  " >
                                    <a target='blank' href="shop-hub-master.vercel.app"><TiLocationArrowOutline size={35} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="text-center flex justify-center items-center gap-x-[14px] group ">
                <h5 className='font-primary font-bold text-[30px] md:text-[42px] text-white'>View More</h5>
                <div className="w-[39px] h-[39px] md:w-[49px] md:h-[49px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-purple-800 group-hover:text-white bg-white/10 border border-white/10 text-purple-500  " >
                    <a target='blank' href="https://github.com/nabilislam11?tab=repositories"> <TiLocationArrowOutline className='size-7 md:size-9 ' /></a>
                </div>
            </div>


        </div>
    )
}

export default Project