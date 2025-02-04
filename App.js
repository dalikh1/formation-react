/**
 * <div id='parent'>
 *  <div id='child'>
 *    <h1>mohamed ali</h1>
 *    <h2>hello</h2>
 * </div>
 * </div>
 */

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "mohamed ali"),
    React.createElement("h2", {}, "hello")
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// const heading = React.createElement('h1',{id:'heading',name:'dali'},'hello world from react!');
// console.log(heading) // it is an object
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading)
