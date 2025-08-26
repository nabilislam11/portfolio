import React from 'react'
import { FaLaptopCode } from 'react-icons/fa6'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";
const Marque = () => {

    return (
        <div>

            <div className="slider-container pt-4 ">
                <Marquee className=' gap-x-50 '>

                    <div>
                        <h3>
                            <div className="flex items-center justify-around  gap-x-15 ">
                                <FaLaptopCode className="text-purple-600" size={50} />
                                <h1 className='font-primary  font-medium  text-[40px] md:text-[70px]  text-purple-600 '> INNOVATIVE</h1>
                                <FaLaptopCode className="text-purple-600 " size={50} />
                                <p className='font-primary  font-medium  text-[40px] md:text-[70px] text-purple-600'>CREATIVE
                                </p>
                                <FaLaptopCode className="text-purple-600 " size={50} />
                                <p className='font-primary  font-medium  text-[40px] md:text-[70px] text-purple-600'>DEDICATED</p>
                                <FaLaptopCode className="text-purple-600 " size={50} />
                                <p className='font-primary  font-medium  text-[40px] md:text-[70px] text-purple-600'>Designer</p>
                                <FaLaptopCode className="text-purple-600 " size={50} />
                                <p className='font-primary  font-medium text-[40px]  md:text-[70px] text-purple-600'>PASSIONATE</p>

                            </div>
                        </h3>

                    </div>


                </Marquee>


            </div>
        </div>
    )
}

export default Marque

