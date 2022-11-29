import React from "react";
import ReactDOM from "react-dom";
import UsersList from "./UsersList.jsx";
import users from "./users.js";

const rootElem = document.querySelector("#root");

ReactDOM.render(<UsersList list={users}/>, rootElem)
