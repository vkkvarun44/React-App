/**
 * 
 *  <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag</h1>
 *      </div>
 *  </div>
 * 
 * 
 * 
 */

import React from "react";
import { createRoot } from "react-dom/client";


const parent = React.createElement(
    "div", 
    { id: "parent" }, 
    [
        React.createElement(
            "div", 
            { id: "child" },
            [
                React.createElement("h1", {}, "I'm h1 tag"), 
                React.createElement("h2", {}, "I'm h2 tag")
            ]
        ),
        React.createElement(
            "div", 
            { id: "child2" },
            [
                React.createElement("h1", {}, "I'm h1 tag"), 
                React.createElement("h2", {}, "I'm h2 tag")
            ]
        )
    ]
);

showHTML()

function showHTML(){
    console.log(parent);

    let root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
}
