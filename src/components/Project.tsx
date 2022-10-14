import Image from "next/image";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { IoMdOpen } from "react-icons/io";

const Project = ({ data, index }) => {
    const reverse = index % 2 !== 0 ? "reverse" : "";
    return (
        <section
            className={`flex  space-x-5 items-center capitalize cursor-pointer ${reverse}`}
        >
            <div className="w-[600px] h-[350px]  relative group rounded-sm overflow-hidden mx-5 ">
                <Image src={data.img} alt="" layout="fill" />
                <div className="absolute w-full h-full bg-[#64ffdb50] group-hover:hidden" />
            </div>
            <div className={`flex-1  space-y-4 ${reverse ? "" : "text-end"} `}>
                <h1 className={`text-[#64FFDA]  `}>Featured Project</h1>
                <h2 className="font-bold text-lg text-[#CCD6F6]">
                    {data.name}
                </h2>
                <div className="  bg-[#112240] w-full p-6 px-3 text-[#A8B2D1]">
                    {data.description}
                </div>
                <div
                    className={`flex items-center space-x-5 ${
                        reverse ? "justify-start" : "justify-end"
                    }  `}
                >
                    {data.tools.map((value, i) => (
                        <p className="text-[#A0ABCA]">{value}</p>
                    ))}
                </div>
                <div
                    className={`flex ${
                        reverse ? "" : "justify-end"
                    } space-x-5 text-xl`}
                >
                    <FiGithub />
                    <a href={data.link} target="_blank">
                        <IoMdOpen />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Project;
