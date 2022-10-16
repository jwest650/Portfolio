import Head from "next/head";
import { useState } from "react";
import LeftBar from "../src/components/LeftBar";
import Nav from "../src/components/Nav";
import Right from "../src/components/Right";
import About from "./About";
import Contact from "./Contact";
import HomePage from "./Home";
import Projects from "./Projects";

const Home = () => {
    const [show, setshow] = useState(false);
    console.log(show);

    return (
        <div className="relative">
            <Head>
                <title>Jay | Portfolio</title>
            </Head>
            <Nav setshow={setshow} show={show} />
            <LeftBar />
            <Right />
            <main className={`md:mx-32 ${show ? "blur-sm" : ""}`}>
                <HomePage />
                <About />
                <Projects />
                <Contact />
            </main>
        </div>
    );
};

export default Home;
