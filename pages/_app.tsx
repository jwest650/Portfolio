import "../styles/globals.css";
import type { AppProps } from "next/app";
import StartPage from "./page/StartPage";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <StartPage>
            <Component {...pageProps} />;
        </StartPage>
    );
}

export default MyApp;
