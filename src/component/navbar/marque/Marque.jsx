import React from 'react'
import { FaLaptopCode } from 'react-icons/fa6'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Marque = () => {
    const settings = {
        
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 15000,
        autoplaySpeed: 10,
        cssEase: "linear"
    };
    return (
        <div>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <h3>
                            <div className="flex items-center  justify-around  bg-gray-400 ">
                                <FaLaptopCode className="text-purple-800" size={70} />
                                <h1 className='font-primary  font-bold  text-[70px] text-purple-800 '>WEB DEVELOPER</h1>
                                <FaLaptopCode className="text-purple-800 " size={70} />
                                <p className='font-primary  font-bold  text-[70px] text-purple-800'>Designer</p>
                            </div>
                        </h3>

                    </div>
                    <div>
                        <div className="flex items-center  justify-around   bg-gray-400 ">
                            <FaLaptopCode className="text-purple-800" size={70} />
                            <h1 className='font-primary  font-bold  text-[70px] text-purple-800 '>WEB DEVELOPER</h1>
                            <FaLaptopCode className="text-purple-800 " size={70} />
                            <p className='font-primary  font-bold  text-[70px] text-purple-800'>Designer</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center  justify-around  bg-gray-400 ">
                            <FaLaptopCode className="text-purple-800" size={70} />
                            <h1 className='font-primary  font-bold  text-[70px] text-purple-800 '>WEB DEVELOPER</h1>
                            <FaLaptopCode className="text-purple-800 " size={70} />
                            <p className='font-primary  font-bold  text-[70px] text-purple-800'>Designer</p>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    )
}

export default Marque

