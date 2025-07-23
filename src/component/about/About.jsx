import React from 'react'
import { FaCode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import code from '../../assets/code.gif'

const About = () => {
    return (
        <div className='py-[149px] '>
            <div className="flex justify-between py-[91px] px-[77px] bg-white/10">
                <div className="w-[40%] ">
                    <p className='font-primary  font-medium   text-[17px] text-white'>About Me</p>
                    <h2 className='font-primary font-bold text-[32px] pt-[8px] pb-[16px] text-white   '>Professional <span className='text-[#98c45d]'> Problem Solutions </span>
                        For Digital Products</h2>
                    <p className='font-primary  font-normal  text-[16px] text-gray-400 pb-[35px] '>Sed ut perspiciatis unde omnis iste natus to
                        voluptatem accusantium doloremque
                        laudantium, totam rem aperiamc</p>
                        <div className="flex justify-between">
                            <div className="flex gap-3 items-center">
                                <div className="w-[49px] h-[49px] bg-purple-800 rounded-full flex justify-center items-center text-white ">
                                    <FaCode size={20}  />
                                </div>
                                <p className='font-secondary   font-medium   text-[17px] text-white'>Front-end Web Design</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="w-[49px] h-[49px] bg-purple-800 rounded-full flex justify-center items-center text-white ">
                                    <FaCode size={20}  />
                                </div>
                                <p className='font-secondary   font-medium   text-[17px] text-white'>Back-end Web Dev</p>
                            </div>
                        </div>
                        <div className="flex justify-between pt-[25px]">
                            <div className="flex gap-3 items-center">
                                <div className="w-[49px] h-[49px] bg-purple-800 rounded-full flex justify-center items-center text-white ">
                                    <FaCode size={20}  />
                                </div>
                                <p className='font-secondary   font-medium   text-[17px] text-white'>Responsive Web Dev</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="w-[49px] h-[49px] bg-purple-800 rounded-full flex justify-center items-center text-white ">
                                    <FaCode size={20}  />
                                </div>
                                <p className='font-secondary   font-medium   text-[17px] text-white'>DataBase Headlining</p>
                            </div>
                        </div>
                </div>
                <div className="w-[10%] text-[#58c4dc] "><FaReact size={100} /></div>
                <div className="w-[30%] ">
                    <img src={code} alt="" />
                </div>
            </div>

        </div>
    )
}

export default About