import React from 'react'
import { FaCode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import code from '../../assets/code.gif';

const About = () => {
    return (
        <div className='py-[149px] '>
            <div className=" relative flex justify-between py-[91px] px-[77px] bg-black">
                <div className="w-[40%] ">
                    <p className='font-primary  font-medium   text-[17px] text-white'>About Me</p>
                    <h2 className='font-primary font-bold text-[32px] pt-[8px] pb-[16px] text-white   '>Professional <span className='text-[#98c45d]'> Problem Solutions </span>
                        For Digital Products</h2>
                    <p className='font-secondary  font-normal  text-[16px] text-gray-400 pb-[35px] '>
                       I’m a MERN stack developer from Dhaka, weaving ideas into interactive, scalable digital experiences. My code lives where creativity meets logic—turning complex problems into elegant solutions. Whether it’s crafting a sleek interface or engineering robust backend systems, I build with purpose, precision, and a bit of curiosity for the unknown.
                       </p>
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
                <div className="w-[30%]  ">
                    <img className='w-full h-full  ' src={code} alt="" />
                     <div className="text-white ">
                        <div className=" absolute top-[192px] right-[396px] bg-gray-400 rounded-full     py-4 px-3.5 ">
                            <h3 className='font-semibold font-secondary text-[16px] text-black  ' >MERN Stack Developer</h3>
                        </div>
                        <div className=" absolute top-[292px] right-[396px] bg-gray-400 rounded-full     py-4 px-3.5 ">
                            <h3 className='font-semibold font-secondary text-[16px] text-black  ' >Nabil Islam Hamza</h3>
                        </div>
                    </div>

                </div>

            </div>
                   

        </div>
    )
}

export default About