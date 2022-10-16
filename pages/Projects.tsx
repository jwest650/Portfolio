import React, { useEffect } from "react";
import Project from "../src/components/Project";
import { projectInfo } from "../src/data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Projects = () => {
    const data = projectInfo;

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const el = document.querySelectorAll(".list section");
        el.forEach((e) => {
            gsap.from(e, {
                scrollTrigger: {
                    trigger: e,
                    start: "top center",
                },
                duration: 2,
                opacity: 0,
                y: 100,
            });
        });
    }, []);
    return (
        <div id="projects" className="h-full  space-y-14 p-5 pt-20">
            <div className="flex items-center">
                <h1 className="text-2xl font-semibold ">
                    <small className="text-md text-[#64FFDA] mr-4">03.</small>
                    Some Things I Have Built
                </h1>
                <div className="h-[1px] bg-[#233554] w-[200px] ml-5" />
            </div>
            <section className="space-y-28 flex flex-col list">
                {data.map((value, i) => (
                    <Project data={value} key={i} index={i} />
                ))}
            </section>
        </div>
    );
};

export default Projects;
