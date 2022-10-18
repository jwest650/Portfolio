import React, { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

const Welcometext = () => {
    gsap.registerPlugin(TextPlugin);
    useEffect(() => {
        gsap.fromTo(
            "#welcome",
            { opacity: 0 },
            {
                opacity: 1,
                duration: 2,
                text: "Welcome to my Portfolio",
                ease: "none",
                delimiter: " ",
            }
        );
    }, []);

    return (
        <div
            id="welcome"
            className="h-screen flex flex-col justify-center items-center md:text-4xl text-xl"
        ></div>
    );
};

export default Welcometext;
