import React from 'react'
import { FaLaptopCode } from 'react-icons/fa6'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";
const Marque = () => {

    return (
        <div>

            <div className="slider-container ">
                <Marquee className=' gap-x-50 '>

                    <div>
                        <h3>
                            <div className="flex items-center  justify-around  gap-x-15  ">
                                <FaLaptopCode className="text-purple-600" size={70} />
                                <h1 className='font-primary  font-bold  md:text-[70px]  text-purple-600 '> MERN STACK DEVELOPER</h1>
                                <FaLaptopCode className="text-purple-600 " size={70} />
                                <p className='font-primary  font-bold  md:text-[70px] text-purple-600'>Designer</p>
                            </div>
                        </h3>

                    </div>
                    <div>
                        <div className="flex items-center  justify-around gap-x-15 ">
                            <FaLaptopCode className="text-purple-600" size={70} />
                            <h1 className='font-primary  font-bold  md:text-[70px] text-purple-600 '>WEB DEVELOPER</h1>
                            <FaLaptopCode className="text-purple-600 " size={70} />
                            <p className='font-primary  font-bold  md:text-[70px] text-purple-600'>Designer</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center  justify-around gap-x-15 ">
                            <FaLaptopCode className="text-purple-600" size={70} />
                            <h1 className='font-primary  font-bold  md:text-[70px] text-purple-600 '>APP DEVELOPER</h1>
                            <FaLaptopCode className="text-purple-600 " size={70} />
                            <p className='font-primary  font-bold  md:text-[70px] text-purple-600'></p>
                        </div>
                    </div>
                </Marquee>


            </div>
        </div>
    )
}

export default Marque

