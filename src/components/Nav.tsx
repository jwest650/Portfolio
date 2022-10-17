import Link from "next/link";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { CgMenuRight } from "react-icons/cg";
import RightNav from "./RightNav";
const Nav = ({ show, setshow }: any) => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    const moveHome = () => {
        gsap.to(window, { duration: 2, scrollTo: { y: 300 } });
    };
    const moveAbout = () => {
        gsap.to(window, { duration: 2, scrollTo: "#about" });
    };
    useEffect(() => {
        const tl = gsap.timeline({
            opacity: 0,
            duration: 0.5,
        });

        tl.from(".one", {
            y: -50,
        });
        tl.from(".two", {
            opacity: 0,
            y: -50,
        });
        tl.from(".three", { opacity: 0, y: -50 });
        tl.from(".four", { opacity: 0, y: -50 });
    }, []);

    return (
        <div className="relative">
            <nav className="flex items-center justify-between p-5 md:px-14 capitalize cursor-pointer fixed w-full top-0 bg-[#0A192F] z-50  ">
                <div className="logo text-xl font-bold">
                    <p>Jay West</p>
                </div>
                <div className="cursor-pointer" onClick={() => setshow(!show)}>
                    <CgMenuRight className="md:hidden text-3xl" />
                </div>
                <div className="md:flex items-center space-x-10 hidden  ">
                    <Link href={"#home"} scroll={false}>
                        <p className="one">
                            <small className="text-md text-[#64FFDA] mr-2 ">
                                01.
                            </small>
                            Home
                        </p>
                    </Link>
                    <Link href={"#about"} scroll={false}>
                        <p className="two">
                            <small className="text-md text-[#64FFDA] mr-2 ">
                                02.
                            </small>
                            About
                        </p>
                    </Link>
                    <Link href={"#projects"} scroll={false}>
                        <p className="three">
                            <small className="text-md text-[#64FFDA] mr-2 ">
                                03.
                            </small>
                            Projects
                        </p>
                    </Link>
                    <Link href={"#contact"} scroll={false}>
                        <p className="four">
                            <small className="text-md text-[#64FFDA] mr-2 ">
                                04.
                            </small>
                            Contact
                        </p>
                    </Link>
                    <a href={"/"} target="_blank" download>
                        <button className="border border-[#64FFDA] p-2 px-5 rounded-sm ">
                            Resume
                        </button>
                    </a>
                </div>
            </nav>
            {show && <RightNav setshow={setshow} />}
        </div>
    );
};

export default Nav;
