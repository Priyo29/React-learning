/*

    Crested A server - npx
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
    port Number 
    Consistent hashing
    zero config

    Transitive dependencies - the dependecies that we download also have their own dependencies

*/

import React, { createElement as ce } from "react";
import ReactDOM from "react-dom/client";

const heading = ce(
  "h1",
  {
    id: "title1",
    key: "1h",
  },
  "Heading 1",
);

// JSX // This is is the format of JSX that is alike HTML but not same , this is intertpreted by babel and convert into JS

  
// JSX => uses React.createElement => Object =>HTML(DOM)

const heading2= (
  <h1 id="title" keys="h2">
    Namastwe Priyo
  </h1> 
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

