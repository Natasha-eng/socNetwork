import React from "react";
import loader from "../../../assets/images/load.gif";
import preloaderStyle from "./loader.module.css";

export function Preloader() {
    return <div className={preloaderStyle.loader}>
        <img src={loader}/>
    </div>
}