import React, { useEffect, useState } from "react";
import Welcometext from "../../src/components/Welcometext";

const StartPage = ({ children }: any) => {
    const [start, setstart] = useState(true);
    useEffect(() => {
        if (start) {
            setTimeout(() => setstart(false), 5000);
        }
    }, []);

    return !start ? children : <Welcometext />;
};

export default StartPage;
