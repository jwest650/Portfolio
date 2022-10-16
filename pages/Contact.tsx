import Link from "next/link";
import React from "react";

const Contact = () => {
    return (
        <div id="contact" className="h-screen pt-20 space-y-10">
            <p className="text-center capitalize text-[#64FFDA] ">
                <small className="text-md text-[#64FFDA] mr-4 ">0.4</small>
                Whats next?
            </p>
            <h1 className="text-center  text-3xl font-semibold ">
                Get in Touch
            </h1>
            <div className="mx-auto w-[400px] text-center ">
                <p className="text-lg capitalize">
                    {" "}
                    my inbox is always open. Whether you have a question or just
                    want to say hi, I’ll try my best to get back to you!
                </p>
            </div>
            <Link
                href={"mailto:jaywest650@gmail.com"}
                rel="noreferrer noopener"
                target="_blank"
            >
                <div className="capitalize mx-auto w-fit border border-[#64FFDA] p-3 px-5 rounded hover:bg-[#64ffdb44]">
                    <button className="capitalize">say hello</button>
                </div>
            </Link>
        </div>
    );
};

export default Contact;
