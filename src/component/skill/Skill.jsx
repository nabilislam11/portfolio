import React from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs";
import { AiTwotoneHtml5 } from "react-icons/ai";
import { GrHtml5 } from "react-icons/gr";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
const Skill = () => {
    return (
        <div id='Skill' className='py-[107px] flex justify-center items-center h-screen'>
            <div className="flex justify-between pt-[74px] bg-white/10 rounded-2xl px-[90px] ">
                <div data-aos="zoom-in" className="w-[30%] py-[125px]">
                    <p className='font-primary font-normal text-[16px] text-gray-400'>My Skill</p>
                    <h3 className='font-primary font-bold text-[32px] text-white '>Let’s Explore Popular <samp className='text-purple-500'>Skills & Experience</samp> </h3>
                    <p className='font-primary font-normal text-[16px] text-gray-400'>Sed ut perspiciatis unde omnis iste natus to
                        voluptatem accusantium doloremque
                        laudantium, totam rem aperiamc</p> 
                    <div className="pt-[87px] flex items-center gap-x-2 group   ">
                        <p className='font-primary  font-normal  text-[16px] text-white'>Learn More</p>
                        <div className=" flex justify-center w-[49px] h-[49px] rounded-full items-center transition-all duration-300 group-hover:bg-purple-800  group-hover:text-white   bg-white/10 border border-white/10 text-purple-500 ">
                            <BsArrowUpRightCircle size={25} />

                        </div>
                    </div>
                </div>
                {/* right__part  */}
                <div className="w-[60%] flex flex-col gap-y-[40px]  ">
                    {/* right__top__part */}
                    <div className="flex justify-between gap-x-[20px] "> 
                        <div className="flex flex-col items-center px-[10px] pb-[8px] pt-[27px] rounded-[20px] bg-[#131313] group hover:translate-y-[-5px] transition-transform duration-300 group-hover:border-2 group-hover:border-purple-800  ">
                            <a className='text-white  transition-all duration-300 group-hover:text-purple-800 text-[60px] mx-auto group-hover:animate-bounce group-hover:text-primary' href=""><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-figma-icon lucide-figma"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" /><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" /><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" /><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" /><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" /></svg></a>
                            <h2 className='font-primary font-bold text-[26px] text-white pt-[8px] pb-[15px] '>Figma</h2>
                            <div className=" mb-[5px] py-[8px] px-[38px] rounded bg-black transition-all duration-300 group-hover:bg-purple-800">
                                <p className='font-primary font-bold text-[26px]  text-gray-400 transition-transform duration-30 group-hover:text-white '>50%</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center px-[10px] pb-[8px] pt-[27px] rounded-[20px] bg-[#131313] group hover:translate-y-[-5px] transition-transform duration-300 group-hover:border-2 group-hover:border-purple-800  ">
                            <a className='text-white  transition-all duration-300 group-hover:text-purple-800 text-[60px] mx-auto group-hover:animate-bounce group-hover:text-primary' href=""><GrHtml5 size={40}  /></a>
                            <h2 className='font-primary font-bold text-[26px] text-white pt-[8px] pb-[15px]  '>Html</h2>
                            <div className=" mb-[5px] py-[8px] px-[38px] rounded bg-black transition-all duration-300 group-hover:bg-purple-800">
                                <p className='font-primary font-bold text-[26px]  text-gray-400 transition-transform duration-30 group-hover:text-white '>50%</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center px-[10px] pb-[8px] pt-[27px] rounded-[20px] bg-[#131313] group hover:translate-y-[-5px] transition-transform duration-300 group-hover:border-2 group-hover:border-purple-800  ">
                            <a className='text-white transition-all duration-300 group-hover:text-purple-800 text-[60px] mx-auto group-hover:animate-bounce group-hover:text-primary' href=""><IoLogoCss3 size={40} /></a>
                            <h2 className='font-primary font-bold text-[26px] text-white pt-[8px] pb-[15px]'>CSS</h2>
                            <div className=" mb-[5px] py-[8px] px-[38px] rounded bg-black transition-all duration-300 group-hover:bg-purple-800">
                                <p className='font-primary font-bold text-[26px]  text-gray-400 transition-transform duration-30 group-hover:text-white '>50%</p>
                            </div>f
                        </div>
                        <div className="flex flex-col items-center px-[10px] pb-[8px] pt-[27px] rounded-[20px] bg-[#131313] group hover:translate-y-[-5px] transition-transform duration-300 group-hover:border-2 group-hover:border-purple-800  ">
                            <a className='text-white  transition-all duration-300 group-hover:text-purple-800 text-[60px] mx-auto group-hover:animate-bounce group-hover:text-primary' href=""><FaJs size={40} /></a>
                            <h2 className='font-primary font-bold text-[26px] text-white pt-[8px] pb-[15px]  '>JS</h2>
                            <div className=" mb-[5px] py-[8px] px-[38px] rounded bg-black transition-all duration-300 group-hover:bg-purple-800">
                                <p className='font-primary font-bold text-[26px]  text-gray-400 transition-transform duration-30 group-hover:text-white '>50%</p>
                            </div>
                        </div>
                    </div>
                    {/* right__bottom__part */}
                    <div className="flex justify-between gap-x-[20px]">
                        <div className="flex flex-col items-center px-[10px] pb-[8px] pt-[27px] rounded-[20px] bg-[#131313] group hover:translate-y-[-5px] transition-transform duration-300 group-hover:border-2 group-hover:border-purple-800  ">
                            <a className='text-white  transition-all duration-300 group-hover:text-purple-800 text-[60px] mx-auto group-hover:animate-bounce group-hover:text-primary' href=""><DiMongodb size ={40} /></a>
                            <h2 className='font-primary font-bold text-[26px] text-white pt-[8px] pb-[15px]  '>MongoDB</h2>
                            <div className="py-[8px] mb-[10px] px-[38px] rounded bg-black transition-all duration-300 group-hover:bg-purple-800">
                                <p className='font-primary font-bold text-[26px]  text-gray-400 transition-transform duration-30 group-hover:text-white '>50%</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center px-[10px] pb-[8px] pt-[27px] rounded-[20px] bg-[#131313] group hover:translate-y-[-5px] transition-transform duration-300 group-hover:border-2 group-hover:border-purple-800  ">
                            <a className='text-white  transition-all duration-300 group-hover:text-purple-800 text-[60px] mx-auto group-hover:animate-bounce group-hover:text-primary' href=""><FaReact size={40} /></a>
                            <h2 className='font-primary font-bold text-[26px] text-white pt-[8px] pb-[15px]'>React</h2>
                            <div className="py-[8px] mb-[10px]  px-[38px] rounded bg-black  transition-all duration-300 group-hover:bg-purple-800">
                                <p className='font-primary font-bold text-[26px]  text-gray-400 transition-transform duration-30 group-hover:text-white '>50%</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center px-[10px] pb-[8px] pt-[27px] rounded-[20px] bg-[#131313] group hover:translate-y-[-5px] transition-transform duration-300 group-hover:border-2 group-hover:border-purple-800  ">
                            <a className='text-white transition-all duration-300 group-hover:text-purple-800 text-[60px] mx-auto group-hover:animate-bounce group-hover:text-primary' href=""><SiExpress size ={40}  /></a>
                            <h2 className='font-primary font-bold text-[26px] text-white pt-[8px] pb-[15px]'>Express</h2>
                            <div className=" mb-[10px]  py-[8px] px-[38px] rounded bg-black transition-all duration-300 group-hover:bg-purple-800">
                                <p className='font-primary font-bold text-[26px]  text-gray-400 transition-transform duration-30 group-hover:text-white '>50%</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center px-[10px] pb-[8px] pt-[27px] rounded-[20px] bg-[#131313] group hover:translate-y-[-5px] transition-transform duration-300 group-hover:border-2 group-hover:border-purple-800  ">
                            <a className='text-white transition-all duration-300 group-hover:text-purple-800 text-[60px] mx-auto group-hover:animate-bounce group-hover:text-primary' href=""><DiNodejs size={40} /></a>
                            <h2 className='font-primary font-bold text-[26px] text-white pt-[8px] pb-[15px]'>Node JS</h2>
                            <div className=" mb-[10px]  py-[8px] px-[38px] rounded bg-black  transition-all duration-300 group-hover:bg-purple-800">
                                <p className='font-primary font-bold text-[26px]  text-gray-400 transition-transform duration-30 group-hover:text-white '>50%</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Skill