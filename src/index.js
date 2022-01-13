import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./tailwind.css";

// App 컴포넌트를 root아이디를 가진 DOM에 랜더할 것임! (index.html의 그 root임)
console.log("object");
ReactDOM.render(<App />, document.querySelector("#app"));
