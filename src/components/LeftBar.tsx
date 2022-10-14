import React from "react";
import { FiGithub, FiInstagram, FiTwitter } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
const LeftBar = () => {
    return (
        <div className="fixed w-28 h-screen  left-0 flex flex-col items-center pt-52   space-y-6 text-4xl ">
            <FiGithub />
            <FiInstagram />
            <FiTwitter />
            <AiFillLinkedin />
            <div className="w-[1px] h-full bg-[#ccd6f6]" />
        </div>
    );
};

export default LeftBar;
