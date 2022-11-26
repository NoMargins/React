import React from "react";

const Offline = ({handleClick}) => {
    return(
    <>
    <span className="status__text">Offline</span>
    <button className="status__btn" onClick={handleClick}>Reconnect</button>
    </>
    )
}

export default Offline;