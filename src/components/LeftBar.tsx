import React, { useEffect } from "react";
import { FiGithub, FiInstagram, FiTwitter } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
const LeftBar = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const tl = gsap.timeline({
            opacity: 0,
            duration: 0.5,
            delay: 2,
        });
        tl.from(".left", {
            opacity: 0,
        });
        tl.from(".lk", { opacity: 0, y: -100 });
        tl.from(".tw", { opacity: 0, y: -100 });

        tl.from(".ig", {
            opacity: 0,
            y: -50,
        });
        tl.from(".git", {
            x: -100,
            opacity: 0,
            ease: "elastic",
            duration: 1.5,
        });
    }, []);
    return (
        <div className="fixed w-28 h-screen  left-0 flex flex-col items-center pt-52   space-y-6 text-4xl left cursor-pointer ">
            <Link href="https://github.com/jwest650/" target="_blank">
                <FiGithub className="git" />
            </Link>
            <Link href={"https://www.instagram.com/jaywest650/?next=%2F"}>
                <FiInstagram className="ig" />
            </Link>
            <Link href={"https://twitter.com/jerry_gasu"}>
                <FiTwitter className="tw" />
            </Link>
            <Link href="https://www.linkedin.com/in/jerry-gasu/">
                <AiFillLinkedin className="lk" />
            </Link>
            <div className="w-[1px] h-full bg-[#ccd6f6]" />
        </div>
    );
};

export default LeftBar;
