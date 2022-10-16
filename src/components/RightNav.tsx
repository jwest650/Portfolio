import Link from "next/link";
import React from "react";

const RightNav = ({ setshow }) => {
    return (
        <div className="w-full h-full bg-[#0000008e]   fixed  top-0  bottom-0  z-40 ">
            <section className="ml-auto w-[200px] bg-[#041225] space-y-14 h-full p-5 pt-20 cursor-pointer">
                <Link href={"#home"}>
                    <p className="one" onClick={() => setshow(false)}>
                        <small className="text-md text-[#64FFDA] mr-2 ">
                            01.
                        </small>
                        Home
                    </p>
                </Link>
                <Link href={"#about"}>
                    <p className="one" onClick={() => setshow(false)}>
                        <small className="text-md text-[#64FFDA] mr-2 ">
                            02.
                        </small>
                        About
                    </p>
                </Link>{" "}
                <Link href={"#projects"}>
                    <p className="one" onClick={() => setshow(false)}>
                        <small className="text-md text-[#64FFDA] mr-2 ">
                            03.
                        </small>
                        Project
                    </p>
                </Link>{" "}
                <Link href={"#contact"}>
                    <p className="one" onClick={() => setshow(false)}>
                        <small className="text-md text-[#64FFDA] mr-2 ">
                            04.
                        </small>
                        Contact
                    </p>
                </Link>
            </section>
        </div>
    );
};

export default RightNav;
