import Link from "next/link";
import React from "react";

const Nav = () => {
    return (
        <nav className="flex items-center justify-between p-5 px-14 capitalize cursor-pointer">
            <div className="logo text-xl">
                <p>Jay West</p>
            </div>
            <div className="flex items-center space-x-10  ">
                <Link href={"#home"}>
                    <p>
                        <small className="text-md text-[#64FFDA] mr-2">
                            01.
                        </small>
                        Home
                    </p>
                </Link>
                <Link href={"#about"}>
                    <p>
                        <small className="text-md text-[#64FFDA] mr-2">
                            02.
                        </small>
                        About
                    </p>
                </Link>
                <Link href={"#projects"}>
                    <p>
                        <small className="text-md text-[#64FFDA] mr-2">
                            03.
                        </small>
                        Projects
                    </p>
                </Link>
                <Link href={"contact"}>
                    <p>
                        <small className="text-md text-[#64FFDA] mr-2">
                            04.
                        </small>
                        Contact
                    </p>
                </Link>
                <Link href={""}>
                    <button className="border border-[#64FFDA] p-2 px-5 rounded-sm">
                        Resume
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
