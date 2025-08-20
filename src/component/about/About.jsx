import React from 'react'
import { FaCode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import code from '../../assets/code.gif';
import gif2 from '../../assets/gif2.png'
import CountUp from 'react-countup';
import code3 from '../../assets/code3.webp'
import { useInView } from "react-intersection-observer";
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
     AOS.init();
 const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
    return (
        <div id='About' className='md:py-[149px]  py-[21px] '>
            <div ref={ref} className=" relative flex md:flex-row md:justify-between md:py-[91px] md:px-[77px] text-center  py-[20px] px-[20px] bg-black flex-col ">
                <div className="md:w-[40%] w-full  ">
                    <p className='font-primary  font-medium   md:text-[17px] text-[16px] text-white'>About Me</p>
                    <h2 className='font-primary  md:w-full font-bold md:text-[32px] pt-[8px] pb-[16px] text-white text-[19px] w-[300px]  '>Professional <span className='text-purple-500'> Problem Solutions </span>
                        For Digital Products</h2>
                    <p className='font-secondary md:w-full  font-normal  text-[16px] text-gray-400 md:pb-[35px] pb-[15px] w-[309px] '>
                        I’m a MERN stack developer from Dhaka, weaving ideas into interactive, scalable digital experiences. My code lives where creativity meets logic—turning complex problems into elegant solutions. Whether it’s crafting a sleek interface or engineering robust backend systems, I build with purpose, precision, and a bit of curiosity for the unknown.
                    </p>
                    {/* top__part */}
                    <div className="flex md:justify-between  md:flex-row flex-col justify-center items-center  ">
                     
                            <div className="flex flex-col w-[200px] text-center  bg-[#1F1F1F] rounded-[20px] py-[17px] px-[15px]  ">
                                <h2 className='font-tittle  font-normal text-purple-500  text-[25px]'><CountUp end={1} start={inView ? 0:null}  /></h2>
                                <p className='font-secondary   font-medium   text-[17px] text-white'>Years Experience </p>
                            </div>
                       
                          
                            <div className="flex flex-col w-[200px] text-center justify-around  bg-[#1F1F1F] rounded-[20px] py-[17px] px-[15px]  ">
                                <h2 className='font-tittle   font-normal text-purple-500 text-[25px]'><CountUp end={120} start={inView ? 0:null}  /></h2>
                                <p className='font-secondary   font-medium   text-[17px] text-white'>Projects Completed </p>
                            </div>
                        
                    </div>
                    {/* bottom__part__ */}
                    <div className="flex md:flex-row md:justify-between md:pt-[25px] flex-col justify-center items-center  ">
                   {/* bottom__right__part */}
                            <div className="flex flex-col w-[200px] text-center  bg-[#1F1F1F] rounded-[20px] py-[17px] px-[15px]  ">
                                <h2 className='font-tittlefont-normal text-purple-500 text-[25px]'><CountUp end={63} start={inView ? 0:null} /> </h2>
                                <p className='font-secondary   font-medium   text-[17px] text-white'>Happy Clients</p>
                            </div>

                            {/* bottom__left_-part */}
                            <div className="flex flex-col w-[200px] text-center  bg-[#1F1F1F] rounded-[20px] py-[17px] px-[15px]  ">
                                <h2 className='font-tittle font-normal text-purple-500  text-[25px]'><CountUp end={21} start={inView ? 0:null}  /></h2>
                                <p className='font-secondary   font-medium   text-[17px] text-white'>Technologies Used</p>
                            </div>
                    </div>
                </div>
                <div className="md:w-[10%] mx-auto text-[#58c4dc] "><FaReact size={100} /></div>
                <div className="md:w-[40%] w-full ">
                    <img className='md:w-full md:h-full  ' src={code3} alt="" />
                    <div className="text-white ">
                        <div data-aos="fade-left" data-aos-delay="200"   className=" absolute top-[222px] right-[526px] bg-gray-300 rounded-full  z-10   py-4 px-3.5 ">
                            <h3 className='font-semibold font-secondary text-[16px] text-black  ' >MERN Stack Developer</h3>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="220" className=" absolute top-[305px] right-[496px] bg-gray-300 rounded-full     py-4 px-3.5 ">
                            <h3 className='font-semibold font-secondary text-[16px] text-black  ' >Nabil Islam Hamza</h3>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default About