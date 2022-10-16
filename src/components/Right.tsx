import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Right = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const tl = gsap.timeline({
            opacity: 0,
            duration: 0.5,
            delay: 3,
        });
        tl.from(".line", {
            opacity: 0,
        });
        tl.from(".right", {
            opacity: 0,
        });
    }, []);

    return (
        <div className="hidden fixed w-28 h-full right-0 md:flex flex-col items-center justify-center pt-52  space-y-6 ">
            <p className="right ">jaywest650@gmail.com</p>
            <div className="w-[1px] h-full bg-[#ccd6f6] line" />
        </div>
    );
};

export default Right;
