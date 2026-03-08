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
  "Heading 1 teri mkc",
);

// JSX

const heading2 = (
  <h1 id="title" keys="h2">
    Namastwe Priyo
  </h1> 
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
