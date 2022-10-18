import Image from "next/image";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { IoMdOpen } from "react-icons/io";

const Project = ({ data, index }: any) => {
    const reverse = index % 2 !== 0;
    return (
        <section
            className={`md:flex  space-x-5 items-center capitalize cursor-pointer ${
                reverse ? "md:flex-row-reverse" : ""
            } `}
        >
            <div className=" w-[87%] md:w-[600px] h-[350px] absolute  md:relative group rounded-sm overflow-hidden mx-5 -z-50 md:z-50 ">
                <Image src={data.img} alt="" layout="fill" />
                <div className="absolute w-full h-full bg-[#0B1B31]  md:bg-[#0a192f9a] md:group-hover:hidden" />
            </div>
            <div
                className={` flex-1  space-y-4 ${
                    reverse ? "" : "md:text-end"
                } `}
            >
                <h1 className={`text-[#64FFDA]  `}>Featured Project</h1>
                <h2 className="font-bold text-lg text-[#CCD6F6]">
                    {data.name}
                </h2>
                <div className="  bg-[#112240] w-full p-6 px-3 text-[#A8B2D1]">
                    {data.description}
                </div>
                <div
                    className={`flex items-center space-x-5 ${
                        reverse ? "md:justify-start" : "md:justify-end"
                    }  `}
                >
                    {data.tools.map((value: any, i: any) => (
                        <p className="text-[#A0ABCA]">{value}</p>
                    ))}
                </div>
                <div
                    className={`flex ${
                        reverse ? "" : "md:justify-end"
                    } space-x-5 text-xl`}
                >
                    <a href={data.git} target="_blank">
                        <FiGithub />
                    </a>
                    <a href={data.link} target="_blank">
                        <IoMdOpen />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Project;
