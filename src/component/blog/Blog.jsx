import React from 'react'
import { TiLocationArrowOutline } from "react-icons/ti";
import blog from '../../assets/blog.png'

const Blog = () => {
    return (
        <div id='Blog' className='py-[108px]'>
            <div className="text-center  pb-[76px] ">
                <p className='font-primary  font-normal  text-[16px] text-white pb-[30px] '>News & Blog</p>
                <h3 className='font-primary font-bold text-[42px]  text-white'>Latest News & <samp className='text-purple-500 '>Blog</samp></h3>
            </div>
            {/* full__blog */}
            <div className="flex flex-col gap-y-[30px]">
                {/* frist__part */}
                <div className="flex justify-center gap-x-[21px]  ">
                    <div className="flex justify-around px-[20px] py-[18px] rounded-[20px] group bg-white/10 ">
                        <div className="w-[30%] ">
                            <img src={blog} alt="" />
                        </div>
                        <div className="w-[60%] ">
                            <p className='font-primary  font-normal  text-[16px] text-white'>12 Mar 2025</p>
                            <h2 className='font-primary font-bold text-[32px] text-white'>React Virtual DOM</h2>

                            <div className="flex items-center gap-x-3  pt-1.5">
                                <p className='font-primary  font-normal  text-[16px] text-white'>Read More</p>
                                <div className=" flex w-[49px] h-[49px] rounded-full group-hover:bg-purple-800 items-center group-hover:text-white transition-all duration-300 bg-white/10 border border-white/10 text-purple-500  justify-center ">
                                    <TiLocationArrowOutline size={35} />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-around px-[20px] py-[18px] rounded-[20px] group bg-white/10 ">
                        <div className="w-[30%] ">
                            <img src={blog} alt="" />
                        </div>
                        <div className="w-[60%] ">
                            <p className='font-primary  font-normal  text-[16px] text-white'>12 Mar 2025</p>
                            <h2 className='font-primary font-bold text-[32px] text-white'>React Virtual DOM</h2>

                            <div className="flex items-center gap-x-3 pt-1.5 ">
                                <p className='font-primary font-normal text-[16px] text-white'>Read More</p>
                                <div className=" flex items-center w-[49px] h-[49px] rounded-full group-hover:bg-purple-800  group-hover:text-white transition-all duration-300 bg-white/10 border border-white/10 text-purple-500 justify-center ">
                                    <TiLocationArrowOutline size={35} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* second__part */}
                <div className="flex justify-center gap-x-[21px]  ">
                    <div className="flex justify-around px-[20px] py-[18px] rounded-[20px] group bg-white/10 ">
                        <div className="w-[30%] ">
                            <img src={blog} alt="" />
                        </div>
                        <div className="w-[60%] ">
                            <p className='font-primary  font-normal  text-[16px] text-white'>12 Mar 2025</p>
                            <h2 className='font-primary font-bold text-[32px] text-white'>React Virtual DOM</h2>

                            <div className="flex items-center gap-x-3  pt-1.5 ">
                                <p className='font-primary  font-normal  text-[16px] text-white'>Read More</p>
                                <div className="w-[49px] h-[49px] rounded-full group-hover:bg-purple-800 flex items-center group-hover:text-white transition-all duration-300 bg-white/10 border border-white/10 text-purple-500  justify-center ">
                                    <TiLocationArrowOutline size={35} />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-around px-[20px] py-[18px] rounded-[20px] group bg-white/10 ">
                        <div className="w-[30%] ">
                            <img src={blog} alt="" />
                        </div>
                        <div className="w-[60%] ">
                            <p className='font-primary  font-normal  text-[16px] text-white'>12 Mar 2025</p>
                            <h2 className='font-primary font-bold text-[32px] text-white'>React Virtual DOM</h2>

                            <div className="flex items-center gap-x-3  pt-1.5 ">
                                <p className='font-primary  font-normal  text-[16px] text-white'>Read More</p>
                                <div className="w-[49px] h-[49px] rounded-full group-hover:bg-purple-800 flex items-center group-hover:text-white transition-all duration-300 bg-white/10 border border-white/10 text-purple-500 
                                justify-center ">
                                    <TiLocationArrowOutline size={35} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="text-center flex justify-center items-center gap-x-[14px] pt-[110px] group  ">
                <h5 className='font-primary font-bold text-[42px]  text-white'>View More</h5>
                <div className="w-[49px] h-[49px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-purple-800  group-hover:text-white   bg-white/10 border border-white/10 text-purple-500  ">
                    <TiLocationArrowOutline size={35} />
                </div>
            </div>
        </div>
    )
}

export default Blog