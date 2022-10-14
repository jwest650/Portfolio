import Head from "next/head";
import LeftBar from "../src/components/LeftBar";
import Nav from "../src/components/Nav";
import Right from "../src/components/Right";
import About from "./About";
import HomePage from "./Home";
import Projects from "./Projects";

const Home = () => {
    return (
        <div className="relative">
            <Head>
                <title>Jay</title>
            </Head>
            <Nav />
            <LeftBar />
            <Right />
            <main className="mx-32">
                <HomePage />
                <About />
                <Projects />
            </main>
        </div>
    );
};

export default Home;
