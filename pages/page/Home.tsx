import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const HomePage = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const tl = gsap.timeline({
            opacity: 0,
            duration: 0.5,
            delay: 2,
        });

        tl.from(".intro", {
            y: -20,
            opacity: 0,
        });
        tl.from(".name", {
            opacity: 0,
            y: 50,
        });
        tl.from(".text1", { opacity: 0, y: 50 });
        tl.from(".text2", { opacity: 0, y: 50 });
        tl.from(".contact", { opacity: 0, y: 50 });
    }, []);
    return (
        <div
            id="home"
            className="md:px-20  space-y-9 h-screen md:pt-20 p-5 flex flex-col justify-center "
        >
            <p className="text-[#64FFDA] intro">Hi, my name is</p>
            <div className="space-y-3  font-bold capitalize">
                <h1 className="md:text-6xl text-3xl name">jerry gasu</h1>
                <h1 className="md:text-5xl text-3xl text1">
                    i build things for the web
                </h1>
            </div>
            <p className="w-[80%] md:w-[500px]  text2">
                in my role as a professional webdeveloper i am up for just about
                any website building challenge..
            </p>
            <Link
                href={"mailto:jaywest650@gmail.com"}
                rel="noreferrer noopener"
                target="_blank"
            >
                <div className="w-fit">
                    <button className="border border-[#64FFDA] p-2 px-6 rounded text-xl text-[#64FFDA] contact outline-none">
                        {"Contact me/>"}
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default HomePage;
