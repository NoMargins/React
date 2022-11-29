import React from "react";
import ReactDOM from "react-dom";
import TransactionsList from "./TransactionsList.jsx";
import transactions from "./transactions.js";

const rootElem = document.querySelector("#root");

ReactDOM.render(<TransactionsList list={transactions}/>, rootElem)
