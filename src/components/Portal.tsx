import React from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: any) => {
    return createPortal(children, document.querySelector("#portal"));
};

export default Portal;
