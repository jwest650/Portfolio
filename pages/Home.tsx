import React from "react";

const HomePage = () => {
    return (
        <div id="home" className="px-20  space-y-9 h-screen pt-10 ">
            <p className="text-[#64FFDA] ">Hi, my name is</p>
            <div className="space-y-7  font-bold capitalize">
                <h1 className="text-6xl">jerry gasu</h1>
                <h1 className="text-6xl">i build things for the web</h1>
            </div>
            <p className="w-[500px]">
                in my role as a professional webdeveloper i am up for just about
                any website building challenge..
            </p>
            <div className="w-fit">
                <button className="border border-[#64FFDA] p-2 px-6 rounded text-xl text-[#64FFDA]">
                    {"Contact me/>"}
                </button>
            </div>
        </div>
    );
};

export default HomePage;
