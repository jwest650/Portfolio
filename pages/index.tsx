import Head from "next/head";
import LeftBar from "../src/components/LeftBar";
import Nav from "../src/components/Nav";
import Right from "../src/components/Right";
import About from "./About";
import Contact from "./Contact";
import HomePage from "./Home";
import Projects from "./Projects";

const Home = () => {
    return (
        <div className="relative">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles:wght@700&family=IBM+Plex+Mono&display=swap"
                    rel="stylesheet"
                />
                <title>Jay | Portfolio</title>
            </Head>
            <Nav />
            <LeftBar />
            <Right />
            <main className="mx-32 ">
                <HomePage />
                <About />
                <Projects />
                <Contact />
            </main>
        </div>
    );
};

export default Home;
