import React from "react";
import Project from "../src/components/Project";
import { projectInfo } from "./../src/data";

const Projects = () => {
    const data = projectInfo;
    return (
        <div id="projects" className="h-screen  space-y-14 p-5">
            <div className="flex items-center">
                <h1 className="text-2xl font-semibold ">
                    <small className="text-md text-[#64FFDA] mr-4">03.</small>
                    Some Things I Have Built
                </h1>
                <div className="h-[1px] bg-[#233554] w-[200px] ml-5" />
            </div>
            <section className="space-y-28 flex flex-col">
                {data.map((value, i) => (
                    <Project data={value} key={i} index={i} />
                ))}
            </section>
        </div>
    );
};

export default Projects;
