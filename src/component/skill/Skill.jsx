import React, { useState } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { GrHtml5 } from "react-icons/gr";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJs, FaReact } from "react-icons/fa";
import { DiMongodb, DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Skill = () => {
    const { ref, inView } = useInView({ threshold: 0 });
    const [hovered, setHovered] = useState(null);

    const skills = [
        { name: "Figma", icon: "figma", percent: 70 },
        { name: "HTML", icon: <GrHtml5 size={40} />, percent: 95 },
        { name: "CSS", icon: <IoLogoCss3 size={40} />, percent: 90 },
        { name: "JS", icon: <FaJs size={40} />, percent: 85 },
        { name: "MongoDB", icon: <DiMongodb size={40} />, percent: 75 },
        { name: "React", icon: <FaReact size={40} />, percent: 95 },
        { name: "Express", icon: <SiExpress size={40} />, percent: 80 },
        { name: "Node JS", icon: <DiNodejs size={40} />, percent: 75 },
    ];

    return (
        <div id="Skill" className="py-[25px] md:py-[107px] md:flex justify-center items-center">
            <div className="md:flex md:justify-between pt-[30px] md:pt-[74px] bg-white/10 rounded-2xl px-[20px] md:px-[90px] pb-8 md:pb-0">

                {/* Left Text Part */}
                <div data-aos="zoom-in" className="md:w-[30%] md:py-[125px]">
                    <p className="font-primary font-normal text-[16px] text-gray-400">My Skill</p>
                    <h3 className="font-primary font-bold text-[27px] md:text-[32px] text-white">
                        Let’s Explore Popular{" "}
                        <span className="text-purple-500">Skills & Experience</span>
                    </h3>
                    <p className="font-primary font-normal text-[16px] text-gray-400">
                        Sed ut perspiciatis unde omnis iste natus to voluptatem accusantium doloremque laudantium.
                    </p>
                    <div className="pt-[28px] pb-[30px] md:pb-0 md:pt-[87px] flex items-center gap-x-2 group">
                        <p className="font-primary font-normal text-[16px] text-white">Learn More</p>
                        <div className="flex justify-center w-[49px] h-[49px] rounded-full items-center transition-all duration-300 group-hover:bg-purple-800 group-hover:text-white bg-white/10 border border-white/10 text-purple-500">
                            <BsArrowUpRightCircle size={25} />
                        </div>
                    </div>
                </div>

                {/* Right Skills Grid */}
                <div ref={ref} className="md:w-[60%] grid md:grid-cols-4 gap-[20px] mt-6 mb-10 ">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                            className="flex flex-col items-center px-[10px] pb-[8px] pt-[27px] rounded-[20px] bg-[#131313] group hover:translate-y-[-5px] transition-transform duration-300 hover:border-2 hover:border-purple-800"
                        >
                            <div className="text-white transition-all duration-300 group-hover:text-purple-800 text-[60px] mx-auto group-hover:animate-bounce">
                                {skill.icon === "figma" ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-figma"
                                    >
                                        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                                        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                                        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                                        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                                        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                                    </svg>
                                ) : (
                                    skill.icon
                                )}
                            </div>
                            <h2 className="font-primary font-bold text-[26px] text-white pt-[8px] pb-[15px]">
                                {skill.name}
                            </h2>

                            {/* Progress Bar */}
                            <div className="relative mb-[5px] py-[8px] px-[38px] rounded bg-black overflow-hidden group w-[160px] text-center">
                                {/* Purple Fill */}
                                <div
                                    className="absolute top-0 left-0 h-full bg-purple-800 transition-all duration-700"
                                    style={{
                                        width: hovered === index ? `${skill.percent}%` : "0%",
                                    }}
                                ></div>

                                {/* CountUp Text */}
                                <p className="relative z-10 font-primary font-bold text-[26px] text-gray-400 group-hover:text-white transition-colors duration-300">
                                    {hovered === index ? (
                                        <CountUp start={0} end={skill.percent} duration={1.2} suffix="%" />
                                    ) : (
                                        <CountUp start={skill.percent} end={0} duration={1.2} suffix="%" />
                                    )}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skill;
