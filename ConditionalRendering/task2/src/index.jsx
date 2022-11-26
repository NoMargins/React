import React from "react";
import ReactDOM from "react-dom";
import Mailbox from "./Mailbox.jsx";

const rootElem = document.querySelector("#root");
ReactDOM.render(<Mailbox unreadMessages={[2, 3]}/>, rootElem);