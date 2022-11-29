import React from "react";
import Transaction from "./Transaction.jsx";
import "./styles.scss";

class TransactionsList extends React.Component {
    render() {
     const list = this.props.list;
        return (
            <ul className="transactions">
                {list.map((el) => <Transaction key={el.id} {...el}/>)}
            </ul>
        )
    }
}

export default TransactionsList;