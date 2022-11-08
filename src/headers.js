import React from "react";
import "./headers.scss";


function Headers(obj) {
    return(
        <header>
            <h1>TO DO</h1>
            <span onClick={obj.changeIcon}></span>
        </header>
   )
};

export default Headers;
