import React from "react";
import moment from "moment";

const formatDate = date => moment(date).format("DD MMM");
const formatTime = date => moment(date).format("HH:mm");


const Transaction = (item) => {
  return (
    <li className="transaction">
    <span className="transaction__date">{formatDate(item.time)}</span>
    <span className="transaction__time">{formatTime(item.time)}</span>
    <span className="transaction__assets">{item.from} → {item.to}</span>
    <span className="transaction__rate">{item.rate}</span>
    <span className="transaction__amount">{item.amount}</span>
  </li>
  )
}

export default Transaction;