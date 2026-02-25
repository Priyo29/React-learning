/*

    HMR-Hot Module Reloading
    File Watcher Algoritm- C++
    Bundling
    Minify
    Cleaning our Code
    Dev abd Production Build
    Super Fast build Algo
    Image optimization
    Caching while development
    compression
    Compatibility with older version (polyfills)
    Can create HTTPS on dev

*/  


import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
        id: "title1",
        key: "1h",
    },
    "Heading 1 teri mkc"
);

const heading2 = React.createElement(
    "h2",
    {
        id: "title2",
        key: "2h",
    },
    "Heading 2"
);

const container=React.createElement(
    "div",
    {
        id : "container",
        
    },
    [heading, heading2]
);

console.log(heading);

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(container);

