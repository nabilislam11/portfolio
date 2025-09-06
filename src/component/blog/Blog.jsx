import React from 'react'
import { TiLocationArrowOutline } from "react-icons/ti";

import { Link, useParams } from 'react-router';
import intern from '../../assets/intern.webp'
import blog1 from '../../assets/blog1.jpg'
import blog32 from '../../assets/blog32.png'
import blog42 from '../../assets/blog42.webp'

const Blog = () => {
    const blog = [{
        id: 1, title: "How to Grab an Internship in Web Development", description: " javascriprt is a major part of cording.", img: intern, time: "March 15, 2025",
    }, {
        id: 2, title: "The Ultimate Frontend Developer Toolkit for 2025", description: " javascriprt is a major part of cording.", img: blog1, time: "July 25, 2025",
    }, {
        id: 3, title: "React Compiler Beta Release", description: " javascriprt is a major part of cording.", img: blog32, time: "July 25, 2025",
    }, {
        id: 4, title: "HTML, CSS, JavaScript Roadmap for Beginners", description: " javascriprt is a major part of cording.", img: blog42, time: "June 5, 2025",
    }, {
        id: 5, title: "HTML, CSS, JavaScript Roadmap for Beginners", description: " javascriprt is a major part of cording.", img: intern, time: "June 5, 2025",
    }]


    console.log(blog, "hasjfhjkshfj");

    return (
        <div id='Blog' className=' py-[10px] md:py-[108px] flex justify-center items-center '>
            <div className="">
                <div className="text-center  pb-[20px] md:pb-[76px] ">
                    <p className='font-primary  font-normal  text-[16px] text-white  md:pb-[30px] '>News & Blog</p>
                    <h3 className='font-primary font-bold text-[30px] md:text-[42px] text-white'>Latest News & <samp className='text-purple-500 '>Blog</samp></h3>
                </div>
                {/* full__blog */}
                {/* frist__part */}
                <div className=" grid-cols-1   grid  md:grid-cols-2  gap-x-15   gap-y-[30px] ">
                    {
                        blog.slice(0, 4).map((b) => (


                            <div className="flex flex-col justify-center text-center   md:flex md:justify-center md:text-start  md:gap-x-[21px]  ">
                                <div className=" flex flex-col justify-center   md:flex-row md:justify-around md:items-center px-[20px] py-[18px] rounded-[20px] group bg-white/10 ">
                                    <div className=" w-[405] md:w-[30%]  mx-auto md:m-auto ">
                                        <img src={b.img} alt="" />
                                    </div>
                                    <div className="md:w-[60%] ">
                                        <p className='font-primary font-normal text-[16px] text-white'>{b.time} </p>
                                        <h2 className='font-primary font-bold text-[32px]  text-white'>{b.title}</h2>

                                        <div className=" flex  items-center justify-center md:justify-start   gap-x-3  pt-1.5">
                                            <p className='font-primary font-normal  text-[16px] text-white'>Read More</p>
                                            <div className=" w-[39px] h-[39px] flex md:w-[49px] md:h-[49px] rounded-full group-hover:bg-purple-800 items-center group-hover:text-white transition-all duration-300 bg-white/10 border border-white/10 text-purple-500  justify-center ">
                                                <Link to={`/blog_details/${b.id}`}>     <TiLocationArrowOutline size={35} /> </Link>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        ))
                    }

                    {/* second__part */}

                </div>

                <div className="text-center flex justify-center items-center gap-x-[14px] group pt-[20px]">
                    <h5 className='font-primary font-bold text-[30px] md:text-[42px] text-white'>View More</h5>
                    <div className="w-[39px] h-[39px] md:w-[49px] md:h-[49px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-purple-800 group-hover:text-white bg-white/10 border border-white/10 text-purple-500  " >
                        <a  href=""> <TiLocationArrowOutline className='size-7 md:size-9 ' /></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blog