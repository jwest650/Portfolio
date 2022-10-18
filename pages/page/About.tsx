import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { SiAngellist } from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.from("#about", {
            scrollTrigger: {
                trigger: "#about",
                start: "top center",
            },
            duration: 1,
            opacity: 0,
            y: 50,
        });
    }, []);

    return (
        <div id="about" className="md:ml-36 h-full  space-y-8  p-5 md:pt-20">
            <div className="flex items-center ">
                <h1 className="text-2xl font-semibold">
                    <small className="text-md text-[#64FFDA] mr-4">02.</small>
                    About Me
                </h1>
                <div className="h-[1px] bg-[#233554] w-[200px] ml-5" />
            </div>
            <section className="flex flex-wrap space-x-16 text-lg space-y-5">
                <div className="w-[500px] space-y-4">
                    <h1 className="leading-7 text-[#64FFDA]">
                        {`<p>`} <br />
                        <p className="text-[#CCD6F6]">
                            {" "}
                            Hello! My name is Jerry Gasu and I enjoy creating
                            things that live on the internet. My interest in
                            computers lead me to web development.
                        </p>
                        {`</p>`}
                    </h1>
                    <h1>
                        Here are a few technologies I’ve been working with
                        recently:
                    </h1>
                    <aside className="grid grid-cols-2 capitalize text-[14px]">
                        <div>
                            <div className="flex items-center space-x-2">
                                <small className=" text-[#64FFDA]">
                                    <SiAngellist />
                                </small>
                                <p>javascript</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <small className=" text-[#64FFDA]">
                                    <SiAngellist />
                                </small>
                                <p>react</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <small className=" text-[#64FFDA]">
                                    <SiAngellist />
                                </small>
                                <p>react native</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center space-x-2">
                                <small className=" text-[#64FFDA]">
                                    <SiAngellist />
                                </small>
                                <p>mongo db</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <small className=" text-[#64FFDA]">
                                    <SiAngellist />
                                </small>
                                <p>node js</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <small className=" text-[#64FFDA]">
                                    <SiAngellist />
                                </small>
                                <p>express</p>
                            </div>
                        </div>
                    </aside>
                </div>
                <div className=" rounded-sm w-40 h-40 md:h-64 md:w-60 group relative ">
                    <div className=" w-40 h-40 md:h-64 md:w-60 top-5 left-5 border-2 absolute border-[#64FFDA] rounded group-hover:top-2 group-hover:left-2 transition-all duration-700" />
                    <Image
                        src="/Copy of _DSC0920.jpg"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="rounded"
                    />
                    <div className="absolute w-full h-full bg-[#64ffdb50] group-hover:hidden" />
                </div>
            </section>
        </div>
    );
};

export default About;
