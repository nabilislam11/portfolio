import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className='bg-black pt-[79px] '>
            <div className="bg-white/10 py-[114px] flex justify-between    px-12  ">
                <div className="w-[20%] text-center ">
                    <h2 className='font-tittle font-black text-[58px] text-purple-800' >Nabil Islam </h2>

                </div>
                <div className="w-[30%] ">
                    <h2 className='font-secondary   font-semibold  text-[22px] text-white' >Quick Links</h2>
                    <div className="flex  py-5">
                        <ul className='flex gap-x-5 '>
                            <li className='font-secondary font-medium  text-[17px] text-gray-400'><a href="#Home">Home</a></li>
                            <li className='font-secondary font-medium  text-[17px] text-gray-400'><a href="#About">About</a></li>
                            <li className='font-secondary font-medium  text-[17px] text-gray-400'><a href="Service">Service</a></li>
                            <li className='font-secondary font-medium  text-[17px] text-gray-400'><a href="#Skill">Skill</a></li>
                            <li className='font-secondary font-medium  text-[17px] text-gray-400'><a href="#Project">Project</a></li>
                            <li className='font-secondary font-medium  text-[17px] text-gray-400'><a href="#Blog">Blog</a></li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-x-4  py-5 group">
                        <MdAttachEmail className='text-white size-6' />
                        <input type="text" className='border-white border-b-2  outline-0 px-[10px]  text-white placeholder:text-white' placeholder='Enter Your Email' />
                        <button className='font-secondary   font-normal py-[11px] px-[17px] rounded-[30px] bg-white/10 border border-white/10  text-[12 px] text-white  transition-transform duration-300 group-hover:bg-purple-800 '>Sign up</button>
                    </div>
                </div>
                <div className="w-[25%] flex flex-col gap-y-2.5  ">
                    <h2 className='font-secondary   font-semibold  text-[22px] text-white'>Address</h2>
                    <div className="flex gap-x-2.5 w-[285px]">
                        <IoLocationSharp className='text-purple-800 size-12  ' />
                        <p className='font-medium font-secondary text-[16px] text-white '>HOUSE NO. 377,ASHKONA , AIRPORT, DHAKA 1230,
                            BANGLADESH</p>
                    </div>
                    <div className="flex gap-x-2.5">
                        <MdMarkEmailRead className='text-purple-800 size-6' />
                        <p className='font-medium font-secondary text-[16px] text-white '>hamjanabil11@gmail.com</p>
                    </div>
                    <div className="flex gap-x-2.5">
                        <BiSolidPhoneCall className='text-purple-800 size-6' />
                        <p className='font-medium font-secondary text-[16px] text-white '>01836060186</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between pt-[37px] pb-[48px] ">
                <div className=""><p className='font-secondary   font-normal    text-[18px] text-gray-400 '>Copyright @2025, Nabil All Rights Reserved</p></div>
                <div className="flex  gap-x-[54px]">
                    <a target='blank' href="https://github.com/nabilislam11"> <IoLogoGithub className='size-6  text-white' /></a>
                    <FaLinkedin className='size-6 text-[#0a66c2]  bg-white' />
                    <a target='blank' href="https://www.facebook.com/share/1BAD7hkh9k/?mibextid=wwXIfr">
                        <FaFacebook className='size-6 bg-white rounded-full  text-[#0866ff]  ' />
                    </a>


                </div>
            </div>

        </div>
    )
}

export default Footer